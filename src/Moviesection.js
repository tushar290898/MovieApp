import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Moviecard from './Moviecard';
import './Moviesection.css'
import SearchIcon from '@mui/icons-material/Search';


function Moviesection() {

    const [Movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const searchMovies = (title) => {
        const apiURL = `https://www.omdbapi.com?apikey=f70cb7b6&s=${title}`
        axios(apiURL).then((res) => {
            console.log("data", res.data.Search);
            setMovies(res.data.Search)
        })

    }

    useEffect(() => {
        searchMovies("Batman");
    }, [])

    const searchHandle = () => {
        searchMovies(searchTerm)
        setSearchTerm("")
    }


    return (

        <div className='Movie'>
            <div className='header-section'>
                <img src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.png" />
                <div className='searchBar'>
                    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder='Search for movies...' />
                    <SearchIcon onClick={searchHandle} />
                </div>
            </div>


            <div className='Movie-section'>
                {
                    Movies?.length > 0 ?
                        Movies.map((movie) => (
                            <Moviecard
                                key={movie.Id}
                                title={movie.Title}
                                year={movie.Year}
                                poster={movie.Poster}
                            />

                        )) :
                        <div className='Message'>
                            <h3> Sorry... No Movies Available</h3>
                        </div>
                }


            </div>





        </div>
    )
}

export default Moviesection