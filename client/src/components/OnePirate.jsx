import React, { useState } from 'react';
import axios from 'axios';
import styles from './OnePirate.module.css';
import ErrorBox from './ErrorBox';

const OnePirate = (props) => {
    const { pirate, setPirate } = props;
    const { errors, setErrors } = useState(null);

    const editPirate = (changesObj) => {
        axios.put(
            'http://localhost:8000/api/pirates/update/' + pirate._id,
            changesObj
        )
            .then(res => {
                setPirate(res.data);
            })
            .catch(error => {
                if (error.response.data)
                    setErrors(error.response.data.errors);
                else
                    setErrors(["no response from server"]);
            })
    }

    return (
        <div className={styles.OnePirate}>
            <div>
                <img className={styles.img} src={pirate.imageUrl} alt={pirate.name} />
                <h1 className={styles.quote}>"{pirate.favoritePhrase}"</h1>
            </div>
            <div>
                <h1>About</h1>
                <h3>Position: {pirate.position}</h3>
                <h3>Treasures: {pirate.treasures}</h3>
                <h3>Peg Leg: {pirate.pegLeg ? "Yes" : "No"} <button onClick={() => editPirate({ pegLeg: !pirate.pegLeg })}>{pirate.pegLeg ? "No" : "Yes"}</button></h3>
                <h3>Eye Patch: {pirate.eyePatch ? "Yes" : "No"} <button onClick={() => editPirate({ eyePatch: !pirate.eyePatch })}>{pirate.eyePatch ? "No" : "Yes"}</button></h3>
                <h3>Hook Hand: {pirate.hookHand ? "Yes" : "No"} <button onClick={() => editPirate({ hookHand: !pirate.hookHand })}>{pirate.hookHand ? "No" : "Yes"}</button></h3>
                {
                    errors ?
                        <>
                            <br />
                            <ErrorBox>
                                {
                                    Object.values(errors).map((err, index) => <h3 key={index}>{err.message}</h3>)
                                }
                            </ErrorBox>
                        </>
                        : ""
                }
            </div>
        </div>
    )
}

export default OnePirate
