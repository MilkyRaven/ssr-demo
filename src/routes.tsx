import { useLoaderData } from "react-router-dom";
import Home from "./pages/Home";
import { getMovieById, getMoviesByGenre } from "../api"
import MovieDetail from "./pages/MovieDetail";

export async function movieDetailLoader({ params }: { params: { id?: string } }) {
  console.log(params.id)
  if (!params.id) return null;
  const id = parseInt(params.id, 10);
  return getMovieById(id);
}

export const routes = [
  {
    path: "/",
    loader: getMoviesByGenre,
    Component: Home,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
    loader: movieDetailLoader,
  },
  {
    path: "/favorites",
    loader() {
      return { message: "Welcome to favorites" };
    },
    Component() {
      let data = useLoaderData();
      return <h1>{data.message}</h1>;
    },
  },
];
