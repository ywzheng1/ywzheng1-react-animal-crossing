import React, { createContext, useState, useEffect } from 'react';
import { villagers } from './villagers.data'

export const VillagerContext = createContext({
    filterVillagers: [],
    searchTerm: "",
    isProfileOpen: false,
    viewVillager: null,
    toggleModal: () => {},
    searchVillager: () => {}
});


const VillagerProvider = ({ children }) => {
    const [filterVillagers, setVillagers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [viewVillager, setViewVillager] = useState(null);

    const toggleModal = (id) => {setProfileOpen(!isProfileOpen); setViewVillager(id)};
    const searchVillager = (event) => {setSearchTerm(event.target.value);}


    // ComponentDidMount 
    useEffect(() => {
        setVillagers(villagers);
    }, [filterVillagers])
    
    return(
        <VillagerContext.Provider
            value={{
                filterVillagers,
                isProfileOpen,
                viewVillager,
                toggleModal,
                searchTerm,
                searchVillager
            }}
        >
            {children}
        </VillagerContext.Provider>
    )
}

export default VillagerProvider;