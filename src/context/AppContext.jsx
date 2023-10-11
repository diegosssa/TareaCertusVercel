import { createContext, useEffect, useState } from "react";
import { getSesion } from "../helpers/getLogin";

export const ContexCertus = createContext()

export const AppContext = ({children}) =>{

    const [usuario, setUsuario] = useState()
    const token = localStorage.getItem("token")
    useEffect(()=>{
        if(token){
            getSesion(token).then(res => setUsuario(res))
        }
    },[token])

    return(
        <ContexCertus.Provider value={{usuario, setUsuario}}>
            {children}
        </ContexCertus.Provider>
    )
}