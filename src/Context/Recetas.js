import React,{createContext, useEffect, useState} from 'react';
import axios from 'axios';


export const RecetasContext = createContext();


//crear el provider

const RecetasProvider=(props)  =>{
    const [recetas, setRecetas] = useState([]);
const [busqueda, setBusquedaRecetas] = useState({nombre:'',
categoria:''});
const [consultar, setConsultar] = useState(false);

const {nombre, categoria}= busqueda;
useEffect(() => {
    if(consultar){
   const  consultarAPI= async ()=>{
        const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resultado= await axios.get(url);
        setRecetas(resultado.data.drinks);

    }
    consultarAPI();
    }
}, [busqueda])


    return(
        <RecetasContext.Provider
        value={{
                setBusquedaRecetas, setConsultar, recetas
        }}>
            {props.children}
        </RecetasContext.Provider>
    )
};
export default RecetasProvider;