import { useLoaderData } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

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
  try {
    const response = await fetch(
      `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=18&page=1`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {

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
