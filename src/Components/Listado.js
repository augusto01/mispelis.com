import React, { useEffect, useState } from 'react'

export const Listado = () => {

  /** Estado para poner peliculas en el componente */

  const [listadoState, setListadoState] = useState([]);

  /*Metodo Conseguir Peliculas */
  const conseguirPeliculas = () => 
  {
    let peliculas = JSON.parse(localStorage.getItem('pelis'));
    setListadoState(peliculas);

    console.log(peliculas)

  }

  useEffect (()=>{
    conseguirPeliculas();

    console.log('Componente del listado de peliculas cargado!')
  },[]);
  return (
    <>                
            {listadoState.map(peli =>{
              return (
              <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>)
            })}
            
            
    
    
    </>
  )
}
