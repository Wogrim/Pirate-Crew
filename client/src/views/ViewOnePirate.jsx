import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import TitleBar from '../components/TitleBar';
import Body from '../components/Body';
import LinkButton from '../components/LinkButton';
import OnePirate from '../components/OnePirate';

const ViewEditAuthor = (props) => {
    const [pirate, setPirate] = useState(null);
    const [err, setErr] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then(res => {
                if (res.data)
                    setPirate(res.data);
                else
                    setErr("could not find this pirate");
            })
            .catch(error => {
                setErr("failed to get the data");
            })
    }, [id])

    return (
        <>
            <TitleBar title={err ? err : pirate ? pirate.name : "loading..."}>
                <LinkButton route="/pirates" text="Crew Board" />
            </TitleBar>
            <Body>
                {
                    err ?
                        <h3>error: {err}</h3>
                        : pirate ?
                            <OnePirate pirate={pirate} setPirate={setPirate} />
                            : <h3>loading...</h3>
                }
            </Body>
        </>
    )
}

export default ViewEditAuthor
