import './App.css'
import Triqui from './Projects/triqui/Triqui'
import ToDoProject from './Projects/to-do/ToDoProject'
import SearchMovies from './Projects/search-movies/components/MoviesSearch'
function App () {
  return (
    <>
      <h1>Mi Portafolio</h1>
      
      <div className='projects'>
        <Triqui />
        <ToDoProject />
        <SearchMovies />
      </div> 
    </>
  )
}
export default App
