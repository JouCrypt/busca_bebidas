import React,{useContext, useState} from 'react';
import {ModalContext} from '../Context/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflow: 'scroll',
        height: '100%',
        maxHeight: 500,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'block'
        },
        header: {
        padding: '12px 0',
        borderBottom: '1px solid darkgrey'
        },
        content: {
        padding: "12px 0",
        overflow: 'scroll'
        }
}));

const Receta = ({receta}) => {
    
    //configuracion del modal

    const {modalStyle} = useState(getModalStyle);
    const [open, setOpen] = useState (false);
    const classes = useStyles();
    
    const handelOpen =()=>{
        setOpen(true);
    };
    const handelClose =()=>{
        setOpen(false);
    };


    const {setIdRecetas,recetaa, setReceta} = useContext(ModalContext)
 //muestra y formatea los ingredientes
    const mostrarIngredientes = recetaa=>{
            let ingredientes = [];
            for(let i = 1; i < 16; i++)
            {
                if(recetaa[`strIngredient${i}`]){

                    ingredientes.push(
                        <li>{recetaa[`strIngredient${i}`]} {recetaa[`strMeasure${i}`]}</li>
                    )
                }

            }
            return ingredientes;
    };

    return ( <div className="col-md-4 mb-3">
        <div className="card">
            <h2 className="card-header">{receta.strDrink}</h2>
            <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}/>
            <div className="card-body">
                <button className="btn btn-block btn-primary" type="button" onClick={() => {setIdRecetas(receta.idDrink); handelOpen();}}>
                    Ver Receta
                </button>
              
            </div>
            <Modal 
                open = {open}
                onClose={()=>{handelClose();setIdRecetas(null);setReceta({});}}>
                    
                    <div style={modalStyle} className={classes.paper}>
                       <h2>{recetaa.strDrink}</h2>
                       <h3 className="mt-4">Instrucciones</h3>
                       <p>{recetaa.strInstructions}</p>
                       <img className="img-fluid my-4" src={recetaa.strDrinkThumb}></img>
                       <h3>Ingredientes y Cantidades</h3>
                       <ul>
                           {mostrarIngredientes(recetaa)}
                       </ul>
                    </div>
                    
                </Modal>

        </div>
        
    </div>
    
    );
}
 
export default Receta;