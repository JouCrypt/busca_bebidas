import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';


import CategoriasProvider from './Context/Categoria';
import RecetasProvider from './Context/Recetas';
import ModalProvider from './Context/Modal';
function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
<Header/>
<div className="container mt-5">
  <div className="row">
   <Formulario/>
  </div>
  <ListaRecetas/>
</div>
    </ModalProvider>
    </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
