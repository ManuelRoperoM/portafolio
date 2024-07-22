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
import { mdiAccountOutline } from '@mdi/js';
import { mdiCogBox } from '@mdi/js';
import { mdiAccountHardHatOutline } from '@mdi/js';
import { mdiCodeBlockTags } from '@mdi/js';
function App () {
  return (
    <>
      <header className='portafolio__header'>
        <h3>Manuel Ropero</h3>
        <div className='header__actions'>
          <a href="">Sobre mi</a>
          <a href="">Proyectos</a>
          <button>Contáctame</button>
        </div>
        <div className='header__button'>
          <button>Contáctame</button>
        </div>
      </header>
      <main className='portafolio__main'>
        <div className='presentacion'>
          <img src={photo} alt="Fotografia Manuel Ropero" />
          <div className='presentacion__descripcion'>
            <div className='title'>
              <Icon path={mdiAccountOutline} size={2.2} /> 
              <h2>Manuel Ropero</h2>
            </div>
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
            <div className='title'>
              <Icon path={mdiCogBox} size={1.8} />
              <h4>Habilidades</h4>
            </div>
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
        <div className='work-experience'>
          <div className='title'>
            <Icon path={mdiAccountHardHatOutline} size={1.8} />
            <h3>Experiencia Laboral</h3>
          </div>
          <ul className='works'>
            <li className='work'>
              <div className='titles'>
                <h4>Choho Colombia</h4>
                <h5>Desarrollador full stack</h5>
                <h6>Junio 2022 - mayo 2024 [2 años]</h6>
              </div>
              <p>
                Desarrollé y mantuve funcionalidades del <strong>catálogo de ventas</strong> utilizando <strong>Nuxt.js</strong>, 
                <strong>PHP</strong>, <strong>Nest.js</strong>, y <strong>PostgreSQL</strong>. Mejorando los procesos de <strong>ventas</strong>, <strong>facturación</strong>, y <strong>envíos</strong>, 
                garantizando <strong>información</strong> actualizada y <strong>transacciones eficientes</strong>.
              </p>
            </li>
            <li className='work'>
              <div className='titles'>
                <h4>Enel Colombia</h4>
                <h5>Intership</h5>
                <h6>febrero 2023 - agosto 2023 [7 meses]</h6>
              </div>
              <p>
                Implementé un <strong>sistema automático</strong> en <strong>Python</strong> para consolidar información de macro 
                medidores. Utilicé <strong>KNIME</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Python</strong>, y <strong>SQLite</strong> como herramientas 
                para el chat bot para mejorar la eficiencia y precisión en el mantenimiento de macro medidores.
              </p>
            </li>
          </ul>
        </div>
        <div className='skills'>
          <div className='skills__content'>
            <div className='title'>           
              <Icon path={mdiCodeBlockTags} size={1.8} />
              <h4>Proyectos Personales</h4>
            </div>
            {/* <div className='content'>
              <div className='projects'>
                <Triqui />
                <ToDoProject />
                <SearchMovies />
                <Store/>
              </div> 
            </div> */}
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
