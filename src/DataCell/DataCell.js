import React from 'react';

import styles from './DataCell.modules.css';

function DataCell({ title, data }) {
  return (
    <div className={styles.component}>
      <h4 className={styles.title}>
        {title}
      </h4>

      {
        !data || !data.length ?
          <div className={styles.placeholder}>nothing to show</div> :
          data.map((string, index) =>
            <p key={index}
               className={styles.string}
            >
              {string}
            </p>
          )
      }
    </div>
  );
}

export default DataCell;