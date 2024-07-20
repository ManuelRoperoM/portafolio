import './App.css'
import Triqui from './Projects/triqui/Triqui'
import ToDoProject from './Projects/to-do/ToDoProject'
import SearchMovies from './Projects/search-movies/components/MoviesSearch'
import Store from './Projects/store/Store'
function App () {
  return (
    <>
      <h1>Mi Portafolio</h1>
      
      <div className='projects'>
        <Triqui />
        <ToDoProject />
        <SearchMovies />
        <Store/>
      </div> 
    </>
  )
}
export default App
