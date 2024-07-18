import './App.css'
import Triqui from './Projects/triqui/Triqui'
import ToDoProject from './Projects/to-do/ToDoProject'
function App () {
  return (
    <>
      <h1>Mi Portafolio</h1>
      <div className='projects'>
        <Triqui />
        <ToDoProject />
      </div>
    </>
  )
}

export default App
