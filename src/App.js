import logo from './logo.svg';
import './App.css';

function App() {
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
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        {/*Contenido Principal*/}
        <section className="content">
            <article className="peli-item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">una pelicula</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">una pelicula</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
            <article className="peli-item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">una pelicula</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>

            <article className="peli-item">
                <h3 className="title">Desarrollo Web</h3>
                <p className="description">una pelicula</p>
                <button className="edit">Editar</button>
                <button className="delete">Borrar</button>
            </article>
        </section>

        <aside className="lateral">
            <div className="search">
                <h3 className="title">Buscador</h3>
                <form action="">
                  <input type='text' placeholder='Ingresa una pelicula'></input>

                    <button>Buscar</button>
                </form>

            </div>

            <div classNameName="add">
                <h3 className="title">Añadir Pelicula</h3>
                <form action="">               
                    <textarea name="" id="" placeholder="Descripcion"></textarea>
                    <button>Guardar</button>
                </form>
            </div>
        </aside>

        <footer className="footer">
            &copy; Master en JavaScript ES12 Y TypeScript = <a href="https://aalmironportafolio.netlify.app">aalmironportafolio.netlify.app</a>
        </footer>



    </div>
  );
}

export default App;
