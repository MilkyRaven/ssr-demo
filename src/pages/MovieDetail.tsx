import { useLoaderData, Link } from "react-router-dom";

function MovieDetail() {
    const movie = useLoaderData();
    return (
        <div>
            <p>Detalles</p>
            <Link to="/" reloadDocument>← Volver</Link>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Géneros: {movie.genres.map((genre: any) => genre.name).join(", ")}</p>
            <p>Rating: {movie.vote_average}</p>c
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
    )
}

export default MovieDetail