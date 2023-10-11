import { createContext } from "react";
import { useFetch } from "../Hooks/useFetch";
import { useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [query, setQuery] = useState("superman");
    const {isLoading, error, data} = useFetch(`&s=${query}`);

    return (
        <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
            { children }
        </DataContext.Provider>
    )
}