import React, { useContext } from 'react';
import { VillagerContext } from '../../Providers/villagerProvider';
import { ReactComponent as LeafIcon } from '../../Assets/leaf.svg';

import './SearchBar.scss';

const SearchBar = () => {
    
    const { searchVillager, searchTerm } = useContext(VillagerContext)

    return(
        <div className='search-wrapper'>
            <i className='icon'><LeafIcon /></i>
            <input 
                className='searchinput'
                type='search'
                placeholder='Search Villager'
                value={searchTerm}
                onChange={searchVillager}
            />
        </div>
    )
}

export default SearchBar;