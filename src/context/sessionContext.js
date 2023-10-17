import { useState, createContext } from "react";
// La session parece durar hasta que haga un refresh en el browser

export const SessionContext = createContext()

export const SessionContextProvider = ({children}) =>{
    const [esPrimerIngreso, setEsPrimerIngreso]= useState(true)

    const ingresar = () =>{
        setEsPrimerIngreso(false)
    }

    return (
        <SessionContext.Provider value = {{esPrimerIngreso, ingresar}}>
            {children}
        </SessionContext.Provider>

    )
}