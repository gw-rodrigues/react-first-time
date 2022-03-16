function MovieCard({movie}){
    return (
            <li>
                <a className="movie-card" href="/">
                    <figure>
                        <img src="/assets/wall-1.jpg" alt="" />
                    </figure>
                    <h3>Titulo filme</h3>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nostrum optio, minima sequi facilis, quis nobis facere at aliquam, officiis porro? Eveniet culpa consequuntur vitae sapiente repellat cumque sequi doloribus!</p>
                </a>
                <a className="movie-type" href="/movies">Movie</a>
                <a className="movie-year" href="/movies/2022">2022</a>
            </li>
    );
}
export default MovieCard;