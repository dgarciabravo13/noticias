import React from 'react';
import Noticia from "./Noticia";
import PropTypes from 'prop-types';

const ListadoNoticias = ({noticias}) => {
  return(
  
  <div className="row">
    {noticias.map((noticia,i) =>(
      <Noticia
        key={i}
        noticia={noticia}
      />
    ))}
  </div>
)}

ListadoNoticias.propTypes = {
  noticias: PropTypes.array.isRequired
}
 
export default ListadoNoticias;