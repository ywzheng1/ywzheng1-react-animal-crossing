import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/ac_logo.png'
import { ReactComponent as LeafIcon } from '../../Assets/leaf.svg';

import './sidebar.scss';

function Sidebar() {
    return(
        <nav className='sidebar'>
            <img  src={Logo} className='ac_logo' alt="Animal Crossing loggo"/>
            <ul>
                <Link to='/'>
                    <li><LeafIcon className='leaf_icon'/>All Villagers</li>
                </Link>
                <Link to='/birthdayVillagers'>
                    <li><LeafIcon className='leaf_icon'/>Birthday Villager</li>
                </Link>
                <Link to='/specialCharacers'>
                    <li><LeafIcon className='leaf_icon'/>Special Characters</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Sidebar;