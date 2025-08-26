import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

export const GENRES = [
  { id: 28, name: "Acción" },
  { id: 16, name: "Animación" },
  { id: 35, name: "Comedia" },
];


export async function movieDetailLoader({ params }: { params: { id?: string } }) {
  console.log(params.id)
  if (!params.id) return null;
  const id = parseInt(params.id, 10);
  const url = `${process.env.BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  console.log(url)
  const res = await fetch(
    url
  );
  if (!res.ok) throw new Error("Movie not found");

  const data = await res.json();
  return data;
}

export async function genreMoviesLoader() {
  let results: any = {}
  try {
    await Promise.all(
      GENRES.map(async (genre) => {
        const res = await fetch(
          `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genre.id}&page=1`
        );
        const data = await res.json();
        results[genre.name] = data.results;
      })
    );

    return results;
  } catch (err) {
    console.error("Error in homeLoader:", err);
    throw err;
  }
}


export const routes = [
  {
    path: "/",
    loader: genreMoviesLoader,
    Component: Home,
  },
  {
    path: "/movie/:id",
    Component: MovieDetail,
    loader: movieDetailLoader,
  }
];
