import React,{useContext,useState} from 'react';
import {CategoriasContext} from '../Context/Categoria';
import {RecetasContext} from '../Context/Recetas';

const Formulario = () => {
 const [busqueda, setBusqueda] = useState({nombre:'',
categoria:''});
  const {categorias} = useContext(CategoriasContext);
  const {setBusquedaRecetas, setConsultar} = useContext(RecetasContext);

   const obtenerDatosRecetas=e=>{
       const{name,value} = e.target;
       setBusqueda({...busqueda, [name]:value})
   };


    return ( <form className="col-12" onSubmit={e=>{e.preventDefault(); setBusquedaRecetas(busqueda); setConsultar(true);}}>
            <fieldset className="text-center">
                <legend>
                    Buscar bebidas por categoria o ingrediente
                </legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input type="text" name="nombre"className="form-control" placeholder="Buscar por ingrediente"
                    onChange={obtenerDatosRecetas}/>
                </div>
            <div className="col-md-4">
                <select className="form-control" name="categoria" onChange={obtenerDatosRecetas}>
                    <option value="">-Selecciona Categoria-</option>
                    {categorias.map(categoria =>(
                        <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                    ))}
                </select>
            </div>
            <div className="col-md-4">
                <input type="submit" className="btn btn-block btn-primary" value="Buscar Bebidas"/>
            </div>

            </div>

    </form> );
}
 
export default Formulario;