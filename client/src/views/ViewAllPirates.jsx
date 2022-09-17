import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TitleBar from '../components/TitleBar';
import LinkButton from '../components/LinkButton';
import Body from '../components/Body';
import PirateCard from '../components/PirateCard';
import ErrorBox from '../components/ErrorBox';

const ViewAllPirates = (props) => {
    const [allPirates, setAllPirates] = useState(null);
    const [err, setErr] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => {
                setAllPirates(res.data.sort((a, b) => a.name.localeCompare(b.name)));
            })
            .catch(error => {
                setErr("failed to get the data");
            })
    }, [])

    const removePirate = (id) => {
        axios.delete("http://localhost:8000/api/pirates/delete/" + id)
            .then(res => {
                setAllPirates(allPirates.filter(pirate => pirate._id !== id));
            })
            .catch(error => {
                console.log("failed to delete", error);
            })
    }

    return (
        <>
            <TitleBar title="Pirate Crew">
                <LinkButton route="/pirates/new" text="Add Pirate" />
            </TitleBar>
            <Body>
                {
                    err ?
                        <ErrorBox>
                            <h3>error: {err}</h3>
                        </ErrorBox>
                        : allPirates ?
                            allPirates.map((pirate, index) => <PirateCard key={index} pirate={pirate} removePirate={() => removePirate(pirate._id)} />)
                            : <h3>loading...</h3>
                }
            </Body>
        </>
    )
}

export default ViewAllPirates
