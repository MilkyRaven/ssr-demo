import { useLoaderData } from "react-router";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { GENRES } from "../routes";

function Home() {

    const [favorites, setFavorites] = useState<any[]>([])

    const toggleFavorite = (movie: any) => {
        setFavorites((prev) => {
            const exists = prev.some((fav) => fav.id === movie.id);
            const newFavs = exists
                ? prev.filter((fav) => fav.id !== movie.id)
                : [...prev, movie];

            localStorage.setItem("favorites", JSON.stringify(newFavs));
            return newFavs;
        });
    }

    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) setFavorites(JSON.parse(stored));
    }, []);

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