import { Link } from "react-router-dom"



function MovieCard({ movie, toggleFavorite }: any) {

    return (

        <div>
            <p>{movie.title}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <Link to={`/movie/${movie.id}`} reloadDocument>Ver más</Link>
            <button onClick={() => { toggleFavorite(movie) }}>Añadir a favoritos</button>
        </div>

    )
}

export default MovieCard