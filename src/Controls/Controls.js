import React from 'react';
import { Row, Col, Button } from 'reactstrap';

import styles from './Controls.modules.css';

function Controls({ rawData, modifiedData, onGetRawData, onModifyData, onClearAll, onSave, onLoad }) {
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
                  onClick={onGetRawData}
          >
            Get raw data
          </Button>

          <Button className={styles.button}
                  color="success"
                  size="sm"
                  disabled={isRawDataEmpty}
                  onClick={onModifyData}
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
            🔼 Save all to server
          </Button>

          <Button className={styles.button}
                  color="warning"
                  size="sm"
                  onClick={onLoad}
          >
            🔽 Load all from server
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Controls;