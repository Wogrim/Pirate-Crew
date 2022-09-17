import React from 'react';
import  styles  from './TitleBar.module.css';

const TitleBar = (props) => {
    return (
        <div className={styles.TitleBar}>
            <h1>{props.title}</h1>
            <div className={styles.children}>
                {props.children}
            </div>
        </div>
    )
}

export default TitleBar
