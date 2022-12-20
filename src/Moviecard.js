import React from 'react'
import './Moviecard.css'

function Moviecard({title, year, poster}) {
  return (
    <div className='MovieCard'>
        <div className='moviecard-img'>
          <img src={poster}/>
        </div>
        <h2>{year}</h2>
        <h2>{title}</h2>
    </div>
  )
}

export default Moviecard