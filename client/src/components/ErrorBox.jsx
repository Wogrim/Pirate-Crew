import React from 'react';
import styles from './ErrorBox.module.css';

const ErrorBox = (props) => {
  return (
    <div className={styles.ErrorBox}>
        {props.children}
    </div>
  )
}

export default ErrorBox