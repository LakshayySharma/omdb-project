import React from 'react'
import Detail from './Detail'

const Movies = ({movies}) => {
    return (
        <div className="">
            {movies.map(movie =>{
               return <Detail key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster}/>
            })}
            
        </div>
    )
}

export default Movies
