import React from 'react'

const setVoteClass = (vote) => {
    if (vote >= 8) {
        return "green" ;
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}
const API_IMG = "https://image.tmdb.org/t/p/w1280"
 const Movies = ({title, poster_path, overview, vote_average }) => 
    <div className = "movie">
        <img src= {API_IMG + poster_path} alt ="{title}" />
        <div className = "movie-info">
            <h3>{title}</h3>
            <span className = {`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
        <div className ="over-view">
            <h2>Over view:</h2>
            <p>{overview}</p>
        </div>
    </div>
 
export default Movies;
