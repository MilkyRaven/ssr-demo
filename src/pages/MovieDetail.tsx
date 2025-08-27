import { useLoaderData, Link } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";

function MovieDetail() {
    const movie = useLoaderData();
    const { toggleFavorite } = useFavorites();
    return (
        <div>
            <p>Detalles</p>
            <Link to="/" reloadDocument>← Volver</Link>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Géneros: {movie.genres.map((genre: any) => genre.name).join(", ")}</p>
            <p>Rating: {movie.vote_average}</p>c
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <button onClick={() => { toggleFavorite(movie) }} className="favorite-btn"> Marcar como favorita</button>
        </div>
    )
}

export default MovieDetail