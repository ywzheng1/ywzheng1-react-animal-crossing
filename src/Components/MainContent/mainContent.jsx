import React from 'react';
import Header from '../Header/header';

import './mainContent.scss';
import Content from '../Content/content';

function MainContent() {
    return(
        <div className='main-content'>
            <Header/>
            <Content />
        </div>
    )
}

export default MainContent;