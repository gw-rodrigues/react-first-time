const MovieCard = ({ movie }) => (
    <li>
        <a className="movie-card" href={`/movie/${movie.imdbID}`}>
            <figure>
                <img src={(movie.Poster === 'N/A') ? 'https://www.cinemahalls.com/wp-content/uploads/2019/10/Picture-Not-Available-1.jpg' : movie.Poster} alt={movie.Title} />
            </figure>
            <header>
                <h3>{movie.Title}</h3>
            </header>
        </a>
        <a className="movie-type" href="/movies">{movie.Type}</a>
        <a className="movie-year" href="/movies/2022">{movie.Year}</a>
    </li>
)
export default MovieCard;