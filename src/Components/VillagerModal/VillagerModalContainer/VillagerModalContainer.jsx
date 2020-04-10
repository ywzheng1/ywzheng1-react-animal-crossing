import React, { useContext } from 'react';
import { VillagerContext } from '../../../Providers/villagerProvider';
import VillagerModalProfile from '../VillagerModalProfile/VillagerModalProfile';

import './VillagerModalContainer.scss';

const VillagerModalContainer = ({villagerId}) => {
    const {filterVillagers, toggleModal} = useContext(VillagerContext);

    return(
        <div className='villager-modal' onClick={toggleModal}>
            {filterVillagers.filter(villager => {
                return villager.id === villagerId
            }).map(villager => {
                return <VillagerModalProfile villager={villager}/>
            })
            }
        </div>
    )
}

export default VillagerModalContainer;