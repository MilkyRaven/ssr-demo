import { Link } from "react-router-dom"
import "./styles.css"

function MovieCard({ movie, toggleFavorite }: any) {
    // const { toggleFavorite } = useFavorites()
    return (
        <div className="movie-card">
            {/* encabezado */}
            <div className="movie-header">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-genre">Acción</p>
                <p className="movie-rating">{movie.vote_average}</p>
            </div>
            {/* imagen + descripción */}
            <div className="movie-body">
                <div className="movie-image">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
            </div>
            {/* Accion de favoritos */}
            <div className="movie-footer">
                <Link to={`/movie/${movie.id}`} reloadDocument>Ver más</Link>
                <button onClick={() => { toggleFavorite(movie) }} className="favorite-btn"> Marcar como favorita</button>
            </div>
        </div>
    )
}

export default MovieCard