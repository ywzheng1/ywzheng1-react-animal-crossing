import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import './header.scss';

function Header({heading}) {
    return(
        <header className='header'>
            <h1>{heading}</h1>
            <SearchBar className = 'searchbar'/>
        </header>
    )
}

export default Header;