import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {

      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=4f8807def1a14039aba2a845b64f6303`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    };
    consultarApi();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias}/>
      </div>
    </>
  );
}

export default App;
