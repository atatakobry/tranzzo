import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { dataService, modify } from './libs';

import Controls from './Controls';
import DataCell from './DataCell';
import Loader from './Loader';

import logo from './logo.svg';
import styles from './App.modules.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      rawData: [],
      modifiedData: [],
      isLoading: false
    };

    this.onRawDataGet = this.onRawDataGet.bind(this);
    this.onRawDataModify = this.onRawDataModify.bind(this);
    this.onClearAll = this.onClearAll.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    this.onRawDataGet();
  }

  onRawDataGet() {
    this.setState({ isLoading: true });
    dataService
      .getData()
      .then(rawData => this.setState({ rawData, modifiedData: [] }))
      .finally(() => this.setState({ isLoading: false }));
  }

  onRawDataModify() {
    this.setState(({ rawData }) => ({ modifiedData: rawData.map(string => modify(string)) }));
  }

  onClearAll() {
    this.setState({ rawData: [], modifiedData: [] });
  }

  onSave() {
    const { rawData, modifiedData } = this.state;

    this.setState({ isLoading: true });
    dataService
      .saveData({ rawData, modifiedData })
      .finally(() => this.setState({ isLoading: false }));
  }

  onLoad() {
    this.setState({ isLoading: true });
    dataService
      .loadData()
      .then(({ rawData, modifiedData }) => this.setState({ rawData, modifiedData }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { rawData, modifiedData, isLoading } = this.state;

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </header>

        <div className={styles.content}>
          <div className="container">
            <Controls
              rawData={rawData}
              modifiedData={modifiedData}
              onRawDataGet={this.onRawDataGet}
              onRawDataModify={this.onRawDataModify}
              onClearAll={this.onClearAll}
              onSave={this.onSave}
              onLoad={this.onLoad}
            />

            <Row>
              <Col xs={6}>
                  <DataCell title="Raw data"
                            data={rawData}
                  />
              </Col>

              <Col xs={6}>
                  <DataCell title="Modified data"
                            data={modifiedData}
                  />
              </Col>
            </Row>

            {
              isLoading &&
                <Loader />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
