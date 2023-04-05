import React from 'react'
import MovieCard from './MovieCard'

export const MovieList = ({ moviesData }) => {
  return (
    <div>
        {moviesData?.map(movie => {
            return <MovieCard key={movie?.id} {...movie}/>
        })
            
        }
    </div>
  )
}
