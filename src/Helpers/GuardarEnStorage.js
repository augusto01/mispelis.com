export const GuardarEnStorage = peli => {

    //conseguir elementos existente 
    let elementos = JSON.parse(localStorage.getItem('pelis'));
   

    //comprobar si es un array 
    if (Array.isArray(elementos)){
      //añadir elemento nuevo 
      elementos.push(peli);
    }else{
      elementos = [peli];
    }

    console.log(elementos)

    //guardar en el local storage
    localStorage.setItem('pelis',JSON.stringify(elementos))
    //devolver el objeto
    return peli;
  }