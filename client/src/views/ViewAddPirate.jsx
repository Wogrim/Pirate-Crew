import React from 'react';
import AddPirateForm from '../components/AddPirateForm';
import TitleBar from '../components/TitleBar';
import LinkButton from '../components/LinkButton';
import Body from '../components/Body';

const ViewAddPirate = (props) => {
    return (
        <>
            <TitleBar title="Add Pirate">
                <LinkButton route="/pirates" text="Crew Board" />
            </TitleBar>
            <Body>
                <AddPirateForm />
            </Body>
        </>
    )
}

export default ViewAddPirate
