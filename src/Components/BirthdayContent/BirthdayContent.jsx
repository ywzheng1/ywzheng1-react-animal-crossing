import React from 'react';
import Header from '../Header/header';
import BirthdayVillager from '../BirthdayVillagers/BirthdayVillagers';


function BirthdayContent() {
    return(
        <div className='main-content'>
            <Header heading="Today's Birthday Villager"/>
            <BirthdayVillager />
        </div>
    )
}

export default BirthdayContent;