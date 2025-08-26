export async function getMoviesByGenre({ page = 1, genreId = 18 } = {}) {
  // por ahora, tiene hardcodeada la paginación y el género
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}&page=${page}`
    );

    if (!res.ok) {
      throw new Error(`Error en la petición: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Error al obtener películas populares:", err);
    throw err;
  }
}
