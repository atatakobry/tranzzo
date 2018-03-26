import React from 'react';

import styles from './Strings.modules.css';

function Strings({ strings, title }) {
  return (
    <div className={styles.component}>
      <h4 className={styles.title}>
        {title}
      </h4>

      {
        strings.map((string, index) =>
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

export default Strings;