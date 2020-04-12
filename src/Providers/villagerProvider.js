import React, { createContext, useState, useEffect, useContext } from 'react';
import { villagers } from './villagers.data'

export const VillagerContext = createContext({
    filterVillagers: [],
    birthdayVillager: [],
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
    const [birthdayVillager, setBirthdayVillager] = useState([]);

    const toggleModal = (id) => {setProfileOpen(!isProfileOpen); setViewVillager(id)};
    const searchVillager = (event) => {setSearchTerm(event.target.value);}

    const sortBirthdayVillager = (villagers) => {

        const date = new Date();
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();

        const birthdayArray = villagers.filter( villager => {
            return villager.bday.toLowerCase().includes(month.toLowerCase())
        }).filter(villager => {
            return villager.bday.includes(day)
        })

        setBirthdayVillager(birthdayArray)
    } 


    // ComponentDidMount 
    useEffect(() => {
        setVillagers(villagers);
        sortBirthdayVillager(villagers);
    }, [filterVillagers])
    
    return(
        <VillagerContext.Provider
            value={{
                filterVillagers,
                birthdayVillager,
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