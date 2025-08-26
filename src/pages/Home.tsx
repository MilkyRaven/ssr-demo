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
            <h1>Movies</h1>
            <ul style={{ display: "flex", flexDirection: "row" }}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} toggleFavorite={toggleFavorite} />
                ))}
            </ul>
            {/* Favorites */}
            <div style={{ display: "flex", flexDirection: "row" }}>
                <p>Listado de favoritos</p>
                {favorites.map((favorite) => (
                    <div key={favorite.id}>
                        {favorite.id}
                        <MovieCard key={favorite} movie={favorite} toggleFavorite={toggleFavorite} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home