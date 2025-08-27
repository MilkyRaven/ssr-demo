import { useLoaderData } from "react-router";
import MovieCard from "../components/MovieCard";
import useFavorites from "../hooks/useFavorites";
import { GENRES } from "../routes";

function Home() {

    const { favorites, toggleFavorite } = useFavorites();
    const moviesByGenre = useLoaderData();

    return (
        <div>
            {GENRES.map((genre) => (
                <div key={genre.id}>
                    <h2>{genre.name}</h2>
                    <ul style={{ display: "flex", flexDirection: "row", gap: 20, overflow: "scroll" }}>
                        {moviesByGenre[genre.name]?.map((movie: any) => (
                            <MovieCard key={movie.id} movie={movie} toggleFavorite={toggleFavorite} />
                        ))}
                    </ul>
                </div>
            ))}
            {/* Favorites */}
            <div>
                <h1>Listado de favoritos</h1>
                <div style={{ display: "flex", flexDirection: "row", gap: 20, overflow: "scroll" }}>
                    {favorites.map((favorite) => (
                        <MovieCard key={favorite.id} movie={favorite} toggleFavorite={toggleFavorite} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home