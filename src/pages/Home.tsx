import { useLoaderData } from "react-router";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {

    const [favorites, setFavorites] = useState<any[]>([])

    const toggleFavorite = (movie: any) => {
        setFavorites((prev) => prev.includes(movie)
            ? prev.filter(favId => favId !== movie)
            : [...prev, movie])
    }

    const movies = useLoaderData() as { id: number; title: string }[];
    return (
        <div>
            <h1>Acción</h1>
            <ul style={{ display: "flex", flexDirection: "row", gap: 20, overflow: "scroll" }}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} toggleFavorite={toggleFavorite} />
                ))}
            </ul>
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