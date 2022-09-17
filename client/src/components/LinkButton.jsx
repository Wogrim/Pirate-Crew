import React from 'react';
import { useNavigate } from 'react-router-dom';
import  styles  from './LinkButton.module.css';

const LinkButton = (props) => {
    const navigate = useNavigate();

    return (
        <button className={styles.LinkButton} onClick={() => navigate(props.route)}>{props.text}</button>
    )
}

export default LinkButton
