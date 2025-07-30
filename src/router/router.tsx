import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout/Layout";
import Movies from "../pages/Movies";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home endpoint="/api/v1/films/latest " />,
        children: [
          {
            path: "new",
            element: <Home endpoint="api/v1/films/latest " />,
          },
          {
            path: "most-popular",
            element: <Home endpoint="api/v1/films/" />,
          },
          {
            path: "keep-watching",
            element: <Home endpoint="api/v1/films/" />,
          },
          {
            path: "recommended-for-you",
            element: <Home endpoint="api/v1/films/" />,
          },
          {
            path: "trending-now",
            element: <Home endpoint="api/v1/films/" />,
          },
        ],
      },

      {
        path: "/movies",
        element: <Movies endpoint="api/v1/films/onlyFilms" />,
        children: [
          {
            path: "new",
            element: <Movies endpoint="api/v1/films/onlyFilms" />,
          },
          {
            path: "most-popular",
            element: <Movies endpoint="api/v1/films/onlyFilms" />,
          },
          {
            path: "keep-watching",
            element: <Movies endpoint="api/v1/films/onlyFilms" />,
          },
          {
            path: "recommended-for-you",
            element: <Movies endpoint="api/v1/films/onlyFilms" />,
          },
        ],
      },
    ],
  },
]);
