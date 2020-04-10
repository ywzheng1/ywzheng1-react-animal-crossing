import React from 'react';
import Logo from '../../Assets/ac_logo.png'
import { ReactComponent as LeafIcon } from '../../Assets/leaf.svg';

import './sidebar.scss';

function Sidebar() {
    return(
        <nav className='sidebar'>
            <img  src={Logo} className='ac_logo' alt="Animal Crossing loggo"/>
            <ul>
                <li><LeafIcon className='leaf_icon'/>All Villagers</li>
                <li><LeafIcon className='leaf_icon'/>Birthday Villager</li>
                <li><LeafIcon className='leaf_icon'/>Special Characters</li>
            </ul>
        </nav>
    )
}

export default Sidebar;