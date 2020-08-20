import React, {useState} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {

  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState("");

  return (
    <>
    <Header titulo="Buscador de Noticias"/>
    <div className="container white">
      <Formulario
        guardarCategoria={guardarCategoria}
      />
    </div>
    </>
  );
}

export default App;
