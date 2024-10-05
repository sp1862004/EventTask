import { createContext, useContext, useState, useEffect } from 'react';
import { get, ref, remove, set } from 'firebase/database';
import db from '../../firebase';  

const EventsContext = createContext();

export const useEvents = () => useContext(EventsContext);

export const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const dbRef = ref(db, "EventsList");  
        const snapshot = await get(dbRef);
        let eventArray = [];
        if (snapshot.exists()) {
            for (const key in snapshot.val()) {
                const event = snapshot.val()[key];
                eventArray.push({ id: key, ...event });
            }
        }
        setEvents(eventArray);  
    };

    const handleDelete = async (id) => {
        const dbRef = ref(db, `EventsList/${id}`);  
        await remove(dbRef);
        fetchEvents();  
    };

    const updateEvent = async (id, updatedData) => {
        const dbRef = ref(db, `EventsList/${id}`);
        await set(dbRef, updatedData);
        fetchEvents();  
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <EventsContext.Provider value={{ events, handleDelete, updateEvent }}>
            {children}
        </EventsContext.Provider>
    );
};
