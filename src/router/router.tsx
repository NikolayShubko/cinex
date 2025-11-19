import { createBrowserRouter } from "react-router";
import {
  Home,
  Layout,
  ContentPage,
  MoviesAndSeriesPage,
  LoginLayout,
  Login,
  MovieErrorBoundary,
} from "../pages";

const API_BASE = "https://onlyjar-production.up.railway.app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home endpoint="/api/v1/films/" />,
      },
      {
        path: "new",
        element: <Home endpoint="/api/v1/films/latest" />,
      },
      {
        path: "most-popular",
        element: <Home endpoint="/api/v1/films/highestRated" />,
      },
      {
        path: "keep-watching",
        element: <Home endpoint="/api/v1/films/" />,
      },
      {
        path: "trending-now",
        element: <Home endpoint="/api/v1/films/" />,
      },

      {
        path: "movies",
        children: [
          {
            index: true,
            element: <MoviesAndSeriesPage endpoint="/api/v1/films/onlyFilms" />,
          },
          {
            path: "new",
            element: (
              <MoviesAndSeriesPage endpoint="/api/v1/films/onlyFilms/latest" />
            ),
          },
          {
            path: "most-popular",
            element: (
              <MoviesAndSeriesPage endpoint="/api/v1/films/onlyFilms/highestRated" />
            ),
          },
          {
            path: "trending-now",
            element: <MoviesAndSeriesPage endpoint="/api/v1/films/" />,
          },
          {
            path: ":movieId",
            element: <ContentPage />,
            loader: async ({ params }) => {
              const res = await fetch(
                `${API_BASE}/api/v1/films/${params.movieId}`
              );
              if (!res.ok) throw new Response("", { status: 404 });
              return res.json();
            },
            errorElement: <MovieErrorBoundary />,
          },
        ],
      },
      {
        path: "series",
        children: [
          {
            index: true,
            element: (
              <MoviesAndSeriesPage endpoint="/api/v1/films/onlySeries" />
            ),
          },
          {
            path: "new",
            element: (
              <MoviesAndSeriesPage endpoint="/api/v1/films/onlySeries/latest" />
            ),
          },
          {
            path: "most-popular",
            element: (
              <MoviesAndSeriesPage endpoint="/api/v1/films/onlySeries/highestRated" />
            ),
          },
          {
            path: "trending-now",
            element: (
              <MoviesAndSeriesPage endpoint="/api/v1/films/onlySeries/highestRated" />
            ),
          },
          {
            path: ":movieId",
            element: <ContentPage />,
            loader: async ({ params }) => {
              const res = await fetch(
                `${API_BASE}/api/v1/films/${params.movieId}`
              );
              if (!res.ok) throw new Response("", { status: 404 });
              return res.json();
            },
            errorElement: <MovieErrorBoundary />,
          },
        ],
      },
      {
        path: "*",
        element: <div>Not Found Sorry</div>,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);
