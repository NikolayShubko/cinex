import { createBrowserRouter } from "react-router";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import ContentPage from "../pages/ContentPage/ContentPage";
import MoviesAndSeriesPage from "../pages/MoviesAndSeries/MoviesAndSeries";
import LoginLayout from "../pages/Layout/LoginLayout";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home endpoint="/api/v1/films/" />,
    //   },
    //   {
    //     path: "/new",
    //     element: <Home endpoint="/api/v1/films/latest" />,
    //   },
    //   {
    //     path: "/most-popular",
    //     element: <Home endpoint="/api/v1/films/highestRated" />,
    //   },
    //   {
    //     path: "/keep-watching",
    //     element: <Home endpoint="/api/v1/films/" />,
    //   },
    //   {
    //     path: "/recommended-for-you",
    //     element: <Home endpoint="/api/v1/films/" />,
    //   },
    //   {
    //     path: "/trending-now",
    //     element: <Home endpoint="/api/v1/films/" />,
    //   },
    //   {
    //     path: "/movies",
    //     element: <MoviesAndSeriesPage endpoint="/api/v1/films/onlyFilms" />,
    //   },

    //   {
    //     path: "/movies/new",
    //     element: (
    //       <MoviesAndSeriesPage endpoint="/api/v1/films/onlyFilms/latest" />
    //     ),
    //   },
    //   {
    //     path: "/movies/most-popular",
    //     element: (
    //       <MoviesAndSeriesPage endpoint="/api/v1/films/onlyFilms/highestRated" />
    //     ),
    //   },
    //   {
    //     path: "/movies/keep-watching",
    //     element: <MoviesAndSeriesPage endpoint="/api/v1/films/" />,
    //   },
    //   {
    //     path: "/movies/recommended-for-you",
    //     element: <MoviesAndSeriesPage endpoint="/api/v1/films/onlyFilms" />,
    //   },
    //   {
    //     path: "/movies/trending-now",
    //     element: <MoviesAndSeriesPage endpoint="/api/v1/films/" />,
    //   },
    //   {
    //     path: "/movies/:movieId",
    //     element: <ContentPage />,
    //   },
    //   {
    //     path: "/series",
    //     element: <MoviesAndSeriesPage endpoint="/api/v1/films/onlySeries" />,
    //   },

    //   {
    //     path: "/series/new",
    //     element: (
    //       <MoviesAndSeriesPage endpoint="/api/v1/films/onlySeries/latest" />
    //     ),
    //   },
    //   {
    //     path: "/series/most-popular",
    //     element: (
    //       <MoviesAndSeriesPage endpoint="/api/v1/films/onlySeries/highestRated" />
    //     ),
    //   },
    //   {
    //     path: "/series/keep-watching",
    //     element: <MoviesAndSeriesPage endpoint="/api/v1/films/" />,
    //   },
    //   {
    //     path: "/series/recommended-for-you",
    //     element: (
    //       <MoviesAndSeriesPage endpoint="/api/v1/films/onlySeries/mainGenres" />
    //     ),
    //   },
    //   {
    //     path: "/series/trending-now",
    //     element: (
    //       <MoviesAndSeriesPage endpoint="/api/v1/films/onlySeries/highestRated" />
    //     ),
    //   },
    //   {
    //     path: "/series/:movieId",
    //     element: <ContentPage />,
    //   },
    // ],
    children: [
      {
        path: "/",
        element: <Home endpoint="/trending/all/week" />,
      },
      {
        path: "/new",
        element: <Home endpoint="/movie/now_playing" />,
      },
      {
        path: "/most-popular",
        element: <Home endpoint="/movie/top_rated" />,
      },
      {
        path: "/trending-now",
        element: <Home endpoint="/trending/movie/week" />,
      },
      {
        path: "/movies",
        element: <MoviesAndSeriesPage endpoint="/movie/now_playing" />,
      },
      {
        path: "/movies/new",
        element: <MoviesAndSeriesPage endpoint="/movie/now_playing" />,
      },
      {
        path: "/movies/most-popular",
        element: <MoviesAndSeriesPage endpoint="/movie/top_rated" />,
      },
      {
        path: "/movies/trending-now",
        element: <MoviesAndSeriesPage endpoint="/trending/movie/week" />,
      },
      {
        path: "/:type/:movieId",
        element: <ContentPage />,
      },
      {
        path: "/series",
        element: <MoviesAndSeriesPage endpoint="tv/on_the_air" />,
      },
      {
        path: "/series/new",
        element: <MoviesAndSeriesPage endpoint="tv/on_the_air" />,
      },
      {
        path: "/series/most-popular",
        element: <MoviesAndSeriesPage endpoint="/tv/popular" />,
      },
      {
        path: "/series/trending-now",
        element: <MoviesAndSeriesPage endpoint="/trending/tv/week" />,
      },
      // {
      //   path: "/series/:movieId",
      //   element: <ContentPage />,
      // },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  { path: "*", element: <div>Not Found Sorry</div> },
]);
