import React, { useContext } from 'react';
import { Route } from "react-router-dom";
import Sidebar from './Components/Sidebar/sidebar';
import MainContent from './Components/MainContent/mainContent';
import Modal from './Components/Modal/modal';
import VillagerModalContainer from './Components/VillagerModal/VillagerModalContainer/VillagerModalContainer';
import { VillagerContext } from './Providers/villagerProvider';
import BirthdayContent from './Components/BirthdayContent/BirthdayContent'

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
        <Route path='/birthdayVillagers'>
          <BirthdayContent />
          {
            isProfileOpen &&
              <Modal >
                <VillagerModalContainer villagerId={viewVillager}/>
              </Modal>
          }
        </Route>
        <Route path='/specialCharacers'>
          <div>special characters</div>
        </Route>
      </div>
  );
}

export default App;