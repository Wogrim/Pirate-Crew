import React from 'react';
import LinkButton from './LinkButton';
import  styles  from './PirateCard.module.css';
import RedButton from './RedButton';

const PirateCard = (props) => {
    const { pirate, removePirate } = props;

    return (
        <div className={styles.PirateCard}>
            <img src={pirate.imageUrl} alt={pirate.name} />
            <div className={styles.info}>
                <h3>{pirate.name}</h3>
                <div className={styles.buttons}>
                    <LinkButton route={"/pirate/"+pirate._id} text="View Pirate" />
                    <RedButton action={removePirate} text="Walk the Plank" />
                </div>
            </div>
        </div>
    )
}

export default PirateCard
