import { useEffect, useState } from "react"
import { Movie } from "../types/Movie";
import { loadFromStorage, saveToStorage } from "../utils/storage";

function useFavorites(storageKey = "favorites") {
    const [favorites, setFavorites] = useState<Movie[]>([])

    const toggleFavorite = (movie: Movie) => {
        setFavorites((prev) => {
            const exists = prev.some((fav) => fav.id === movie.id);
            const newFavs = exists
                ? prev.filter((fav) => fav.id !== movie.id)
                : [...prev, movie];

            saveToStorage(storageKey, newFavs);
            return newFavs;
        });
    };

    useEffect(() => {
        const stored = loadFromStorage<Movie[]>(storageKey, []);
        setFavorites(stored);
    }, []);

    return { favorites, toggleFavorite }
}

export default useFavorites