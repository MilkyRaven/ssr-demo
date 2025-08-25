import { useLoaderData } from "react-router-dom";

export const routes = [
  {
    path: "/",
    loader() {
      return { message: "Home" };
    },
    Component() {
      let data = useLoaderData();
      return <h1>{data.message}</h1>;
    },
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
