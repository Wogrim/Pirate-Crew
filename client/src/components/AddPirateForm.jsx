import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorBox from './ErrorBox';

const positions = ["Captain", "First Mate", "Quarter Master", "Boatswain", "Powder Monkey"];

const AddPirateForm = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState(positions[0]);
    const [imageUrl, setImageUrl] = useState("");
    const [treasures, setTreasures] = useState(0);
    const [favoritePhrase, setFavoritePhrase] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    //form submit
    const submitForm = (e) => {
        e.preventDefault();
        axios.post(
            'http://localhost:8000/api/pirates/new',
            { name, position, imageUrl, treasures, favoritePhrase, pegLeg, eyePatch, hookHand }
        )
            .then(res => {
                navigate("/");
            })
            .catch(error => {
                if (error.response.data)
                    setErrors(error.response.data.errors);
                else
                    setErrors(["no response from server"]);
            })
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="">Pirate Name:</label>
            <input type="text" id="" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label htmlFor="">Image Url:</label>
            <input type="text" id="" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            <br />
            <label htmlFor=""># of Treasure Chests:</label>
            <input type="number" id="" value={treasures} onChange={(e) => setTreasures(e.target.value)} />
            <br />
            <label htmlFor="">Pirate Catch Phrase:</label>
            <input type="text" id="" value={favoritePhrase} onChange={(e) => setFavoritePhrase(e.target.value)} />
            <br />
            <label htmlFor="">Crew Position:</label>
            <select value={position} onChange={(e) => setPosition(e.target.value)}>
                {
                    positions.map((p, index) => (
                        <option key={index} value={p}>{p}</option>
                    ))
                }
            </select>
            <br />
            <input type="checkbox" checked={pegLeg} onChange={(e) => setPegLeg(e.target.checked)} />
            <label htmlFor="">Peg Leg</label>
            <br />
            <input type="checkbox" checked={eyePatch} onChange={(e) => setEyePatch(e.target.checked)} />
            <label htmlFor="">Eye Patch</label>
            <br />
            <input type="checkbox" checked={hookHand} onChange={(e) => setHookHand(e.target.checked)} />
            <label htmlFor="">Hook Hand</label>
            <br />
            <button type="submit">Add Pirate</button>
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
        </form>
    )
}

export default AddPirateForm
