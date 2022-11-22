import React from 'react'
import './Moviecard.css'

function Moviecard({title, year, poster}) {
  return (
    <div className='MovieCard'>
        <img src={poster}/>
        <h3>{year}</h3>
        <p>{title}</p>
    </div>
  )
}

export default Moviecard