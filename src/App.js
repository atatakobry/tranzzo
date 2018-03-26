import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import { modify, stringsService } from './libs';

import Strings from './Strings';

import logo from './logo.svg';
import styles from './App.modules.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      rawStrings: [],
      modifiedStrings: []
    };
  }

  componentDidMount() {
    stringsService.getStrings()
      .then(strings => {
        this.setState({
          rawStrings: strings,
          modifiedStrings: strings.map(string => modify(string))
        });
      });
  }

  render() {
    const { rawStrings, modifiedStrings } = this.state;

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </header>

        <div className={styles.content}>
          <div className="container">
            <Row>
              <Col xs={6}>
                {
                  rawStrings && !!rawStrings.length &&
                    <Strings strings={rawStrings}
                             title="Raw strings"
                    />
                }

              </Col>

              <Col xs={6}>
                {
                  modifiedStrings && !!modifiedStrings.length &&
                    <Strings strings={modifiedStrings}
                             title="Modified strings"
                    />
                }
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
