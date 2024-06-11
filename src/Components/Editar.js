import React from 'react'

export const Editar = () => {
    const titulo_componente = 'Editar Pelicula'
  return (
    <div className='edit_form'>
      <h3 className='title'>{titulo_componente}</h3>
      <form>
        <input type='text' name='titulo' placeholder='Ingrese nuevo titulo' className='titulo_editado' defaultValue={'Titulo Original'}></input>
        <textarea name='descripcion' defaultValue='descripcion_orginal' className='descripcion_editada '/>

        <input type='submit' className='editar' value='Actualizar'/>
            

      

      </form>
    </div>
  )
}
