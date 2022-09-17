import React from 'react';
import styles from './RedButton.module.css';

const RedButton = (props) => {
  return (
    <button className={styles.RedButton} onClick={()=>props.action()}>{props.text}</button>
  )
}

export default RedButton