import React, { useContext } from 'react';
import { VillagerContext } from '../../Providers/villagerProvider';
import VillagerCard from '../VillagerCard/villagerCard';

import './content.scss';

function Content() {
    const {filterVillagers, searchTerm} = useContext(VillagerContext);

    const villagers = filterVillagers.filter( villager => {
        return villager.name.toLowerCase().includes(searchTerm)
    })

    return(
        <div className='content-wrapper'>
            {villagers.map(villager => {
                return <VillagerCard props={{...villager}}/>
            })}
        </div>
    )
}

export default Content;