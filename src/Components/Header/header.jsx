import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './header.scss';

function Header() {
    return(
        <header className='header'>
            <h1>Animal Crossing Villagers</h1>
            <SearchBar className = 'searchbar'/>
        </header>
    )
}

export default Header;