import React, { createContext, useState, useEffect } from "react";
import newDelivery from "services/delivery";

const DeliveryContext = createContext()

export const DeliveryProvider = ({children}) => {
    const [events, setEvents] = useState({})
    
    async function getDeliveryEvents(){
        const response = await newDelivery()
        // setEvents(response.data)
        console.log(response)
    }

    useEffect(() => {
        getDeliveryEvents()
    },[])
    
    return(
        <DeliveryContext.Provider value={{events, getDeliveryEvents}}>
            {children}
        </DeliveryContext.Provider>
    )
}

export default DeliveryContext;
