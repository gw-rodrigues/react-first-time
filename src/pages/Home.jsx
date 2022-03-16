import { useState, useEffect } from 'react';
import MovieCard from '../components/movieCard';
import omdb from '../api/omdb-api';

function Home() {
    const [movies, setMovies] = useState([])

  console.log(movies.length)

  useEffect(() => {
    const request = omdb('s', '2020')
    console.log(request)
  }, [])

  console.log(movies.length)
    return (
        <>
            <article>
                <header>
                    <h2>Movies</h2>
                </header>
                {
                    movies?.length < 0 ? (
                        <ul id="movie-list">
                            {
                                movies.map((movie) => {
                                    <MovieCard movie={movie} />
                                })
                            }
                        </ul>
                    ) : (
                        <p>Movies not found.</p>
                    )
                }
            </article>
            <article>
                <header>
                    <h2>Series</h2>
                </header>
                {
                    movies?.length > 0 ? (
                        <ul id="movie-list">
                            {
                                movies.map((movie) => {
                                    <MovieCard movie={movie} />
                                })
                            }
                        </ul>
                    ) : (
                        <p>Series not found.</p>
                    )
                }
            </article>
        </>
    )
}
export default Home