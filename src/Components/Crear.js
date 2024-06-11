import React, { useState } from 'react'
import { GuardarEnStorage } from '../Helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {
  const tituloComponente = 'Añadir Pelicula'

  const [peliState,setPeliState]= useState ({
    titulo: '',
    descripcion: ''
  });

  const {titulo, descripcion} = peliState;

  const conseguirDatosForm = e => {
    e.preventDefault();

    //conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
       
    //crear objeto pelicula 
    let pelicula = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    setPeliState(pelicula);
    //Actualizar
    setListadoState(elementos => {
      return [...elementos, pelicula];
    })

    
    //Guardar en el almacenamiento local 
    GuardarEnStorage('pelis',pelicula)



  };

 
  
  return (
    <div>
        <div classNameName="add">
                <h3 className="title">{tituloComponente}</h3>
                <strong>{(titulo && descripcion) &&'Has creado la pelicula: '+titulo}</strong>
                
                <form onSubmit={conseguirDatosForm} action="">  
                    <input type='text' id='titulo' name='titulo' placeholder='titulo'></input>             
                    <textarea name="descripcion" id="" placeholder="Descripcion"></textarea>
                    <button>Guardar</button>
                </form>
            </div>
    </div>
  )
}
