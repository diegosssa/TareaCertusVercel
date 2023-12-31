import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";

export const Movies = () => {
    const { isLoading, data } = useContext(DataContext);

    console.log(data)

    return ( 
        <div className="movies-content">
            {
                !isLoading ?
                    data.map(item => (
                        <ItemMovie 
                        key={item.imdbID} 
                        id={item.imdbID} 
                        type={item.Type} 
                        title={item.Title} 
                        poster={item.Poster} 
                        year={item.Year}
                        />
                    ))
                : ''
            }
        </div>
    );
}