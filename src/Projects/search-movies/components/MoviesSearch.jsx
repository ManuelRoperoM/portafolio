import './styles/App.css'
import { Movies } from './Movies'
import { useSearch } from '../hooks/useSearch'
import { useMovies } from '../hooks/useMovie'
import Icon from '@mdi/react';
import { mdiMovieSearch } from '@mdi/js';

function SearchMovies () {
  const { search, setSearch, error } = useSearch()
  const { mappedMovies, getMovies } = useMovies()
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>MyMovies</h1>
        <form className='movies__form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='search' placeholder='Avengers' />
          <button type='submit'><Icon path={mdiMovieSearch}/></button>
        </form>
        {error && <p className='error'> {error} </p>}
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default SearchMovies
