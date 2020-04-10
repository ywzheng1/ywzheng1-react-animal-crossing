import React, { useContext } from 'react';
import { VillagerContext } from '../../Providers/villagerProvider';
import VillagerCard from '../VillagerCard/villagerCard';

import './content.scss';

function Content() {
    const {villagers} = useContext(VillagerContext);

    return(
        <div className='content-wrapper'>
            {villagers.map(villager => {
                return <VillagerCard props={{...villager}}/>
            })}
        </div>
    )
}

export default Content;