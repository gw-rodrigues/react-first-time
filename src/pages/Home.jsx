import { useState, useEffect } from 'react';
import MovieCard from '../components/movieCard';
//import OMDB from '../api/omdb-api';
import axios from 'axios'

function Home() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const searchMovies = (title) => {
        const API_URL = 'http://www.omdbapi.com/?apikey=cfab33fe';
        axios.get(`${API_URL}&s=marvel`).then(res => {
            setMovies(res.data.Search)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        searchMovies('marvel')
    }, [])

    return (
        <>
            <section className="search-bar">
                <input name="search" placeholder="Search movies or series" type="search" />
                <button>
                    <img src="./search.svg" alt="" />
                </button>
            </section>
            <article>
                {
                    movies?.length > 0 ? (
                        <ul id="movie-list">
                            {
                                movies.map((movie, index) => (
                                    <MovieCard movie={movie} key={index} />
                                ))
                            }
                        </ul>
                    ) : (
                        <p>Movies not found.</p>
                    )
                }
            </article>
        </>
    )
}
export default Home