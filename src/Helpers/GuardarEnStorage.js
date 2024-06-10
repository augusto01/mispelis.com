export const GuardarEnStorage = (clave, elemento) => {

    //conseguir elementos existente 
    let elementos = JSON.parse(localStorage.getItem('pelis'));
   

    //comprobar si es un array 
    if (Array.isArray(elementos)){
      //añadir elemento nuevo 
      elementos.push(elemento);
    }else{
      elementos = [elemento];
    }

    console.log(elementos)

    //guardar en el local storage
    localStorage.setItem(clave,JSON.stringify(elementos))
    //devolver el objeto
    return elemento;
  }