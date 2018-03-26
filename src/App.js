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

    this.onGetRawData = this.onGetRawData.bind(this);
    this.onModifyData = this.onModifyData.bind(this);
    this.onClearAll = this.onClearAll.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    this.onGetRawData();
  }

  onGetRawData() {
    this.setState({ isLoading: true });
    dataService.getData()
      .then(strings => this.setState({ rawData: strings }))
      .finally(() => this.setState({ isLoading: false }))
  }

  onModifyData() {
    this.setState(({ rawData }) => ({
      modifiedData: rawData.map(string => modify(string))
    }));
  }

  onClearAll() {
    this.setState({
      rawData: [],
      modifiedData: []
    });
  }

  onSave() {
    // TODO: implement me
  }

  onLoad() {
    // TODO: implement me
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
              onGetRawData={this.onGetRawData}
              onModifyData={this.onModifyData}
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
