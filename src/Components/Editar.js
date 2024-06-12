import React from 'react'

export const Editar = ({peli,conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = 'Editar Pelicula'

    const guardarEdicion = (e, id) => {
      e.preventDefault();
      
      //conseguir el target del evento 
      let target = e.target;
      
      //buscar el indice del objeto a actualizar 
      const pelis_almacenadas = conseguirPeliculas ();
      const indice = pelis_almacenadas.findIndex(peli => peli.id === id);
      
      //crear objeto con ese indice 
      let peli_actualizada = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      }

      //Actualizar el elemento con ese indice 
      pelis_almacenadas[indice] = peli_actualizada;

      //guardar en el local storage 
      localStorage.setItem('pelis',JSON.stringify(pelis_almacenadas));


      //actualizar los datos 
      setEditar(pelis_almacenadas)
      setEditar(0);

    }
  return (
    <div className='edit_form'>
      <h3 className='title'>{titulo_componente}</h3>
      <form onSubmit={ e => guardarEdicion(e, peli.id)}>
        <input type='text' name='titulo' placeholder='Ingrese nuevo titulo' className='titulo_editado' defaultValue={peli.titulo}></input>
        <textarea name='descripcion' defaultValue={peli.descripcion} className='descripcion_editada '/>
        <input type='submit' className='editar' value='Actualizar'/>          
      </form>
    </div>
  )
}
