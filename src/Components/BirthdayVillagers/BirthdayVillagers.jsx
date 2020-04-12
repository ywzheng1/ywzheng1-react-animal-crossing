import React, { useContext } from 'react';
import { VillagerContext } from '../../Providers/villagerProvider';
import VillagerCard from '../VillagerCard/villagerCard';

const BirthdayVillager = () => {

    const { birthdayVillager } = useContext(VillagerContext);

    return(
        <div className='content-wrapper'>
        {birthdayVillager.map(villager => {
            return <VillagerCard props={{...villager}}/>
        })}
    </div>
    )
}

export default BirthdayVillager;