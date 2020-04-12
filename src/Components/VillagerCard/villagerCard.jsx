import React, { useContext } from 'react';
import { VillagerContext } from '../../Providers/villagerProvider';

import './villagerCard.scss';

const VillagerCard = ({props}) => {

    const { toggleModal } = useContext(VillagerContext);

    return(

        <div className='villager-card' onClick={() => toggleModal(props.id)}>
            <div className='villager-image-container'>
                <img className='villager-image' src={props.imagePng} alt='villager' />
            </div>
            <div className={`villager-name-container ${props.gender === 'girl' ? 'girl' : 'boy'}`}>
                <p className='villager-name'>{props.name}</p>
            </div>
        </div>

    )
}

export default VillagerCard;