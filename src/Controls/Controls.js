import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import styles from './Controls.modules.css';

function Controls({ rawData, modifiedData, onRawDataGet, onRawDataModify, onClearAll, onSave, onLoad }) {
  const isRawDataEmpty = !rawData || !rawData.length;
  const isAllDataEmpty = (!rawData || !rawData.length) && (!modifiedData || !modifiedData.length);

  return (
    <div className={styles.component}>
      <Row>
        <Col className={styles.lefr}
             xs={6}
        >
          <Button className={styles.button}
                  color="primary"
                  size="sm"
                  onClick={onRawDataGet}
          >
            Get raw data
          </Button>

          <Button className={styles.button}
                  color="success"
                  size="sm"
                  disabled={isRawDataEmpty}
                  onClick={onRawDataModify}
          >
            Modify data
          </Button>

          <Button className={styles.button}
                  color="secondary"
                  size="sm"
                  disabled={isAllDataEmpty}
                  onClick={onClearAll}
          >
            Clear all
          </Button>
        </Col>

        <Col className={styles.right}
             xs={6}
        >
          <Button className={styles.button}
                  color="warning"
                  size="sm"
                  disabled={isAllDataEmpty}
                  onClick={onSave}
          >
            <span role="img" aria-label="arrow">🔼</span>Save all to server
          </Button>

          <Button className={styles.button}
                  color="warning"
                  size="sm"
                  onClick={onLoad}
          >
            <span role="img" aria-label="arrow">🔽</span>Load all from server
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Controls;