import React from 'react'

const MovieCard = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>Release year:{props.releaseYear}</p>
        <p>{`${props.ratings}/10`}</p>
        <h4>Casts: {props.cast.map(item => <span key={item}>{item}</span>)}</h4>
        <h4>Director:{props.director}</h4>
    </div>
  )
}

export default MovieCard