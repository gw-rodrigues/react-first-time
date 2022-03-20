import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OMDB_URL from '../api/omdb-api';
import axios from 'axios';

const Movie = () => {
    const [movie, setMovie] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`${OMDB_URL}&i=${id}&plot=full`).then(res => {
            console.log(res.data)
            setMovie(res.data)
        }).catch(err => {
            console.log(err)
        })
        console.log(id)
    }, [id])

    return (
        <article>
            <div className="back-link">
                <a href="/">back to home</a>
            </div>
            <div className="movie-details">
                <figure>
                    <img src={(movie.Poster === 'N/A') ? 'https://wipfilms.net/wp-content/uploads/2016/05/No_Poster-1.JPEG' : movie.Poster} alt={movie.Title} />
                </figure>
                <div className="movie-info">
                    <header>
                        <h3>{movie.Title}</h3>
                        <ul className="movie-list-info">
                            <li>{movie.Type}</li>
                            <li>{movie.Year}</li>
                            <li>{movie.Runtime}</li>
                            <li>{movie.Rated}</li>
                            <li>IMDB: {movie.imdbRating}</li>
                            <li>{movie.Genre}</li>
                        </ul>
                    </header>
                    <ul className="movie-section-list">
                        <li>
                            <h4>Location</h4>
                            <p>{movie.Country}</p>
                        </li>
                        <li>
                            <h4>Language</h4>
                            <p>{movie.Language}</p>
                        </li>
                        <li>
                            <h4>Director</h4>
                            <p>{movie.Director}</p>
                        </li>
                        <li>
                            <h4>Writers</h4>
                            <p>{movie.Writer}</p>
                        </li>
                        <li>
                            <h4>Actors</h4>
                            <p>{movie.Actors}</p>
                        </li>
                    </ul>
                    <h4>Descrition</h4>
                    <p>{movie.Plot}</p>
                </div>
            </div>
        </article >
    )
}
export default Movie