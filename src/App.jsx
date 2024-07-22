import './App.css'
import Triqui from './Projects/triqui/Triqui'
import ToDoProject from './Projects/to-do/ToDoProject'
import SearchMovies from './Projects/search-movies/components/MoviesSearch'
import Store from './Projects/store/Store'
import photo from './assets/image.jpg'


import Icon from '@mdi/react';
import { mdiServerNetwork } from '@mdi/js';
import { mdiViewDashboardVariant } from '@mdi/js';
import { mdiDatabaseCog } from '@mdi/js';
import { mdiMessageText } from '@mdi/js';
import { mdiGoogleAnalytics } from '@mdi/js';
import { mdiBullhorn } from '@mdi/js';
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
            </p>
            <p>  
              Me destaco por mi capacidad de innovación, resolución creativa de problemas y habilidad para trabajar colaborativamente en equipo. A lo largo de mi trayectoria, he demostrado un fuerte pensamiento crítico, utilizando lenguajes como <strong>JavaScript</strong>, <strong>SQL</strong> y <strong>PHP</strong>, así como frameworks y bibliotecas como <strong>React.js</strong>, <strong>Vue.js</strong> y <strong>Node.js</strong> para abordar problemas complejos. <br />
            </p>
            <p>
              Mi versatilidad se refleja tanto en mis habilidades técnicas como en mi capacidad para trabajar en equipos ágiles utilizando metodologías <strong>SCRUM</strong>. Sobresalgo por mi comunicación asertiva y mi disposición a adquirir nuevos conocimientos de manera constante.
            </p>
          </div>
        </div>
        <div className='skills'>
          <div className='skills__content'>
            <h4>Habilidades</h4>
            <div className='skills-boxes'>
              <div className='skill-front'>
                <Icon className='icon' path={mdiViewDashboardVariant} size={1.7} />
                <h5>Front-End</h5>
                <p>
                  Puedo crear interfaces de usuario intuitivas y atractivas utilizando tecnologías como HTML, CSS, JavaScript y frameworks modernos como React. Me especializo en la optimización de la experiencia del usuario y el diseño responsivo.
                </p>
              </div>
              <div className='skill-backend'>
                <Icon className='icon' path={mdiServerNetwork} size={1.7} />
                <h5>Back-End</h5>
                <p>
                  Desarrollo la lógica del servidor y API's eficientes con Node.js y Express. Garantizo un rendimiento óptimo y seguridad en el manejo de datos, además de integrar servicios externos y autenticación.
                </p>
              </div>
              <div className='skill-database'>
                <Icon className='icon'path={mdiDatabaseCog} size={1.7} />
                <h5>Bases de datos</h5>
                <p>
                  Tengo experiencia en el diseño y gestión de bases de datos relacionales como MySQL, PostgreSQL y SQLite. Me enfoco en la optimización de consultas y la integridad de los datos.
                </p>
              </div>
              <div className='skill-chatbots'>
                <Icon className='icon' path={mdiMessageText} size={1.7} />
                <h5>ChatBots</h5>
                <p>
                He desarrollado ChatBots inteligentes para plataformas como Telegram. <br />Estos bots están diseñados para recopilar información importante de manera rápida y eficaz, según las necesidades del usuario, mejorando así la interacción y automatizando tareas repetitivas.
                </p>
              </div>
              <div className='skill-data-analytics'>
                <Icon className='icon' path={mdiGoogleAnalytics} size={1.7} />
                <h5>Analisis de datos</h5>
                <p>
                  Puedo mantener comunicación efectiva con el equipo de desarrollo, atendiendo cualquier inquietud que se presente para llevar el proyecto de manera correcta. Fomento la colaboración y el intercambio de ideas para alcanzar los objetivos del proyecto.
                </p>
              </div>
              <div className='skill-comunication'>
                <Icon className='icon' path={mdiBullhorn} size={1.7} />
                <h5>Comunicación</h5>
                <p>
                  Puedo mantener comunicación efectiva con el equipo de desarrollo, atendiendo cualquier inquietud que se presente para llevar el proyecto de manera correcta. Fomento la colaboración y el intercambio de ideas para alcanzar los objetivos del proyecto.
                </p>
              </div>
            </div>
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
