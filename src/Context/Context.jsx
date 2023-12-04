import React from "react";
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [token, setToken] = useState('');
    const tokenReceived = (token) => {
        setToken(token)
    }
    
    return(
        <ContextProvider value={{token, tokenReceived}}>
            {children}
        </ContextProvider>
    )
}
