import { useLoaderData } from "react-router-dom";
import Home from "./pages/Home";
import { getMoviesByGenre } from "../api"
export const routes = [
  {
    path: "/",
    loader: getMoviesByGenre,
    Component: Home,
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
