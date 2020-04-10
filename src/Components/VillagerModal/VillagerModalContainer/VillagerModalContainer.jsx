import React, { useContext } from 'react';
import { VillagerContext } from '../../../Providers/villagerProvider';
import VillagerModalProfile from '../VillagerModalProfile/VillagerModalProfile';

import './VillagerModalContainer.scss';

const VillagerModalContainer = ({villagerId}) => {
    const {villagers, toggleModal} = useContext(VillagerContext);

    return(
        <div className='villager-modal' onClick={toggleModal}>
            {villagers.filter(villager => {
                return villager.id === villagerId
            }).map(villager => {
                return <VillagerModalProfile villager={villager}/>
            })
            }
        </div>
    )
}

export default VillagerModalContainer;