import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout/Layout";
import Movies from "../pages/Movies";
import Home from "../pages/Home/Home";
import ContentPage from "../pages/ContentPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home endpoint="/api/v1/films/latest " />,
    //     children: [
    //       {
    //         path: "new",
    //         element: <Home endpoint="api/v1/films/latest " />,
    //       },
    //       {
    //         path: "most-popular",
    //         element: <Home endpoint="api/v1/films/" />,
    //       },
    //       {
    //         path: "keep-watching",
    //         element: <Home endpoint="api/v1/films/" />,
    //       },
    //       {
    //         path: "recommended-for-you",
    //         element: <Home endpoint="api/v1/films/" />,
    //       },
    //       {
    //         path: "trending-now",
    //         element: <Home endpoint="api/v1/films/" />,
    //       },
    //     ],
    //   },

    //   {
    //     path: "/movies",
    //     element: <Movies endpoint="api/v1/films/onlyFilms" />,
    //     children: [
    //       {
    //         path: "new",
    //         element: <Movies endpoint="api/v1/films/onlyFilms" />,
    //       },
    //       {
    //         path: "most-popular",
    //         element: <Movies endpoint="api/v1/films/onlyFilms" />,
    //       },
    //       {
    //         path: "keep-watching",
    //         element: <Movies endpoint="api/v1/films/onlyFilms" />,
    //       },
    //       {
    //         path: "recommended-for-you",
    //         element: <Movies endpoint="api/v1/films/onlyFilms" />,
    //       },
    //     ],
    //   },
    // ],

    children: [
      {
        path: "/",
        element: <Home endpoint="/api/v1/films/" />,
      },
      {
        path: "/new",
        element: <Home endpoint="/api/v1/films/latest" />,
      },
      {
        path: "/most-popular",
        element: <Home endpoint="/api/v1/films/highestRated" />,
      },
      {
        path: "/keep-watching",
        element: <Home endpoint="/api/v1/films/" />,
      },
      {
        path: "/recommended-for-you",
        element: <Home endpoint="/api/v1/films/" />,
      },
      {
        path: "/trending-now",
        element: <Home endpoint="/api/v1/films/" />,
      },
      {
        path: "/movies",
        element: <Movies endpoint="/api/v1/films/onlyFilms" />,
      },

      {
        path: "/movies/new",
        element: <Movies endpoint="/api/v1/films/onlyFilms/latest" />,
      },
      {
        path: "/movies/most-popular",
        element: <Movies endpoint="/api/v1/films/onlyFilms/highestRated" />,
      },
      {
        path: "/movies/keep-watching",
        element: <Movies endpoint="/api/v1/films/" />,
      },
      {
        path: "/movies/recommended-for-you",
        element: <Movies endpoint="/api/v1/films/onlyFilms" />,
      },
      {
        path: "/movies/trending-now",
        element: <Movies endpoint="/api/v1/films/" />,
      },
      {
        path: "/movies/:movieId",
        element: <ContentPage />,
      },
    ],
  },
  { path: "*", element: <div>Not Found Sorry</div> },
]);
