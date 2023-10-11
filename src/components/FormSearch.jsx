import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../context/DataContext";

export const FormSearch = () => {
    const [title, setTitle] = useState("")
    const {setQuery, error} = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('title: ', title);
        setQuery(title); 
    }

    return ( 
        <div className="ti">
            <div className="todo">
            <h2  id="d"className="font-serif ">Peliculas</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" class="das" placeholder="Titulo de la Pelicula" onChange={e=>setTitle(e.target.value)}/>
                <input type="submit" className="dasd font-serif" value="Buscar" />
            </form>
            </div>
            { error && <p>The movie doesn't exist </p> }
        </div>
    );
}