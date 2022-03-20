const MovieCard = ({ movie }) => (
    <li>
        <a className="movie-card" href={`/movie/${movie.imdbID}`}>
            <figure>
                <img src={(movie.Poster === 'N/A') ? 'https://wipfilms.net/wp-content/uploads/2016/05/No_Poster-1.JPEG' : movie.Poster} alt={movie.Title} />
            </figure>
            <header>
                <h3>{movie.Title}</h3>
            </header>
        </a>
        <a className="movie-type" href="/">{movie.Type}</a>
        <a className="movie-year" href="/">{movie.Year}</a>
    </li>
)
export default MovieCard;