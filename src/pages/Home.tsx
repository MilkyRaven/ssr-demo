import { useLoaderData } from "react-router";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { GENRES } from "../routes";

function Home() {

    const [favorites, setFavorites] = useState<any[]>([])

    const toggleFavorite = (movie: any) => {
        setFavorites((prev) => prev.includes(movie)
            ? prev.filter(favId => favId !== movie)
            : [...prev, movie])
    }

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
                        <MovieCard key={favorite} movie={favorite} toggleFavorite={toggleFavorite} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home