import React from 'react';

import './VillagerModalProfile.scss';

const VillagerModalProfile = ({villager}) => {
    return (
        <div>
            <div className='passport-wrapper'>
                <div className='png-image'>
                    <img className='villager-image' src={villager.imagePng} alt='villager' />
                </div>
                <div className='passport-top'>
                    <div className='inner'></div>
                </div>
                <hr />
                <div className='passport-bottom'>
                    <div className='inner'>
                        <div className='header'>PASSPORT</div>
                        <div className='passport-content'>
                            <div className='passport-image'>
                                <div className='image-container'>
                                    <img className='' src={villager.image} alt='villager' />
                                </div>
                            </div>
                            <div className='passport-detail'>
                                <div>
                                    <label>Name</label>
                                    <p>{villager.name}</p>
                                </div>
                                <div>
                                    <label>Gender</label>
                                    <p>{villager.gender}</p>
                                </div>
                                <div>
                                    <label>Breed</label>
                                    <p>{villager.breed}</p>
                                </div>
                                <div>
                                    <label>Birthday</label>
                                    <p>{villager.bday}</p>
                                </div>
                                <div><label>catchphrase: {villager.catchphrase}</label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VillagerModalProfile;