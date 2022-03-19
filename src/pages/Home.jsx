import { useState, useEffect } from 'react';
import MovieCard from '../components/movieCard';
import OMDB_URL from '../api/omdb-api';
import axios from 'axios'

function Home() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('marvel')

    const searchMovies = (title) => {
        console.log(title)
        axios.get(`${OMDB_URL}&s=${title}`).then(res => {
            setMovies(res.data.Search)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        searchMovies(searchTerm)
    }, [searchTerm])

    return (
        <main>
            <section className="search-bar">
                <form action="/">
                    <input name="search" id="search-bar" placeholder="Search movies or series" type="search" />
                    <button type='submit' onClick={
                        (e) => {
                            e.preventDefault();
                            const term = document.getElementById("search-bar").value;
                            if (term.length > 2) setSearchTerm(term);
                        }
                    }>
                        <img src="./search.svg" alt="Search" />
                    </button>
                </form>
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
        </main>
    )
}
export default Home