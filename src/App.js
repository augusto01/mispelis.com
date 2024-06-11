import { useState } from "react";
import { Buscador } from "./Components/Buscador";
import { Crear } from "./Components/Crear";
import { Listado } from "./Components/Listado";


function App() {

    const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1> Mis Pelis</h1>
        </header>

        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>
        {/*Contenido Principal*/}
        <section className="content">
           <Listado listadoState = {listadoState} setListadoState={setListadoState}/>
        </section>
        

        <aside className="lateral">
                <Buscador></Buscador>
                <Crear setListadoState = {setListadoState} />
            
        </aside>

        <footer className="footer">
            &copy; Master en JavaScript ES12 Y TypeScript = <a href="https://aalmironportafolio.netlify.app">aalmironportafolio.netlify.app</a>
        </footer>



    </div>
  );
}

export default App;
