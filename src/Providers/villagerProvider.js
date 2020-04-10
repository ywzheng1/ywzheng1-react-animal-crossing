import React, { createContext, useState, useEffect } from 'react';
import { villagers } from './villagers.data'

export const VillagerContext = createContext({
    villagers: [],
    isProfileOpen: false,
    viewVillager: null,
    toggleModal: () => {}
});


const VillagerProvider = ({ children }) => {
    const [sortVillagers, setVillagers] = useState(villagers);
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [viewVillager, setViewVillager] = useState(null);

    const toggleModal = (id) => {setProfileOpen(!isProfileOpen); setViewVillager(id)};

    useEffect(() => {
        console.log(villagers)
    }, [])
    
    return(
        <VillagerContext.Provider
            value={{
                villagers,
                isProfileOpen,
                viewVillager,
                toggleModal
            }}
        >
            {children}
        </VillagerContext.Provider>
    )
}

export default VillagerProvider;