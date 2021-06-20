import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';


export const ModalContext = createContext();


const ModalProvider= (props)=>{
    //state provider
    const [idrecetas, setIdRecetas] = useState (null);
    const [recetaa, setReceta] = useState({});
    //tenemos receta then llamar api

    useEffect(() => {
        const obtenerReceta=async()=>{
            if (!idrecetas) return null;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecetas}`;
            const resultado = await axios.get(url);
            setReceta(resultado.data.drinks[0]);
        };

        obtenerReceta();

    }, [idrecetas])

    return(
        <ModalContext.Provider
        value={{setIdRecetas, recetaa, setReceta}}>
            {props.children}
        </ModalContext.Provider>
    )

};

export default ModalProvider;