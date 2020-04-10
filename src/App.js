import React, { useContext } from 'react';
import { Route } from "react-router-dom";
import Sidebar from './Components/Sidebar/sidebar';
import MainContent from './Components/MainContent/mainContent';
import Modal from './Components/Modal/modal';
import VillagerModalContainer from './Components/VillagerModal/VillagerModalContainer/VillagerModalContainer';
import { VillagerContext } from './Providers/villagerProvider';

import './App.scss';

function App() {

  const { isProfileOpen, viewVillager } = useContext(VillagerContext);

  return (

      <div className='app'>
        <Sidebar />
        <Route exact path='/'>
        <MainContent />
        {
          isProfileOpen &&
            <Modal >
              <VillagerModalContainer villagerId={viewVillager}/>
            </Modal>
        }
        </Route>
      </div>

  );
}

export default App;