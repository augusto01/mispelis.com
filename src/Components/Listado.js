import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

  /** Estado para que aparezca el formulario de editar en el componente */
  const [flag_editar, setEditar] = useState(0);



  /*Metodo Conseguir Peliculas */
  const conseguirPeliculas = () => 
  {
    let peliculas = JSON.parse(localStorage.getItem('pelis'));
    setListadoState(peliculas);

    console.log(peliculas)

    return peliculas;

  }

  const borrarPeli = (id) => {
    //conseguir pelis almacenadas
    let pelis_almacenadas  =  conseguirPeliculas(); 

    //filtrar pelis que no quiero eliminar 
    let nuevo_array_almacenado = pelis_almacenadas.filter (peli => peli.id !== parseInt(id))

    //ACTUALIZAR ESTADO DEL LISTADO 
    setListadoState(nuevo_array_almacenado);

    //ACTULIZAR LOCAL STORAGE
    localStorage.setItem('pelis',JSON.stringify(nuevo_array_almacenado));

  }

  useEffect (()=>{
    conseguirPeliculas();

    console.log('Componente del listado de peliculas cargado!')
  },[]);
  return (
    <>                
            {listadoState !== null && listadoState.map(peli =>{
              return (
              <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="description">{peli.descripcion}</p>
                <button className="edit"   onClick={()=>setEditar(peli.id)}>Editar</button>
                <button className="delete" onClick={()=>borrarPeli(peli.id)} >Borrar</button>
                {flag_editar == peli.id && (<Editar peli = {peli} conseguirPeliculas = {conseguirPeliculas} setEditar={setEditar} setListadoState= {setListadoState}/>)}
            </article>)
            })}
    </>
  )
}
