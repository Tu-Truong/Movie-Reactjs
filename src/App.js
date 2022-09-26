import React, {useEffect, useState} from "react";
import Movies from './Components/Movies.js'

const API_MOVIES = "https://api.themoviedb.org/3/discover/movie?/sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page="


const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query="


function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
       getMovies(API_MOVIES)
    },[]);
    const getMovies = (API) => {
      fetch (API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      })
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      if (searchTerm){
        getMovies(API_SEARCH + searchTerm)
  
          setSearchTerm("")
      }
        
    }
    const handleOnChange = (e) => {
      setSearchTerm(e.target.value)
    }

    return (
      <>
      <header >
        <form onSubmit={handleSubmit}>
          <input className ="search-btn"
          type="input" 
          placeholder="Search..."
          value = {searchTerm} 
          onChange = {handleOnChange}
          />
        </form>
               
        
      </header>
      <div className = "movie-container">
          {movies.length > 0 && movies.map(movie => (
            <Movies key={movie.id} {...movie} />
          ))}
        
      </div>
    </>
    );
}

export default App;
