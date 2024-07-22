import './App.css'
import Triqui from './Projects/triqui/Triqui'
import ToDoProject from './Projects/to-do/ToDoProject'
import SearchMovies from './Projects/search-movies/components/MoviesSearch'
import Store from './Projects/store/Store'
import photo from './assets/image.jpg'
function App () {
  return (
    <>
      <header className='portafolio__header'>
        <h3>Manuel Ropero</h3>
        <div className='header__actions'>
          <a href="">Inicio</a>
          <a href="">Sobre mi</a>
          <a href="">Proyectos</a>
        </div>
        <div className='header__button'>
          <button>Contáctame</button>
        </div>
      </header>
      <main className='portafolio__main'>
        <div className='presentacion'>
          <img src={photo} alt="Fotografia Manuel Ropero" />
          <div className='presentacion__descripcion'>
            <h2>Manuel Ropero</h2>
            <p>
              Soy Ingeniero en proceso de grado y desarrollador web <strong>Full Stack</strong> con una sólida experiencia en la creación y desarrollo de sitios y aplicaciones web utilizando diversas tecnologías. Me especializo en generar soluciones digitales que optimicen la experiencia del usuario, especialmente en el ámbito del <strong>ecommerce</strong>. <br />

              Me destaco por mi capacidad de innovación, resolución creativa de problemas y habilidad para trabajar colaborativamente en equipo. A lo largo de mi trayectoria, he demostrado un fuerte pensamiento crítico, utilizando lenguajes como <strong>JavaScript</strong>, <strong>SQL</strong> y <strong>PHP</strong>, así como frameworks y bibliotecas como <strong>React.js</strong>, <strong>Vue.js</strong> y <strong>Node.js</strong> para abordar problemas complejos. <br />

              Mi versatilidad se refleja tanto en mis habilidades técnicas como en mi capacidad para trabajar en equipos ágiles utilizando metodologías <strong>SCRUM</strong>. Sobresalgo por mi comunicación asertiva y mi disposición a adquirir nuevos conocimientos de manera constante.
            </p>
          </div>
        </div>
        <div className='skills'>
          <div className='skills__content'>
            <h4>Habilidades</h4>
          </div>

        </div>
      </main>


      {/* <div className='content'>
        <div className='projects'>
          <Triqui />
          <ToDoProject />
          <SearchMovies />
          <Store/>
        </div> 
      </div> */}

    </>
  )
}
export default App
