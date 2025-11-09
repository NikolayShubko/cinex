import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "193e133f49b7fdff820f0696824ae2f0";
export const apiTMDB = createApi({
  reducerPath: "apiTMDB",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (build) => ({
    getTMDBContent: build.query({
      query: (query) => `${query}?api_key=${API_KEY}`,
    }),
    getTMDBMovieGenres: build.query({
      query: () => `genre/movie/list?api_key=${API_KEY}`,
    }),
    getTMDBTvGenres: build.query({
      query: () => `genre/tv/list?api_key=${API_KEY}`,
    }),
    getTMDBGenres: build.query({
      query: (type) => `genre/${type}/list?api_key=${API_KEY}`,
    }),
    getContentData: build.query({
      query: ({ type, id }) => `${type}/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetTMDBContentQuery,
  useGetTMDBTvGenresQuery,
  useGetTMDBMovieGenresQuery,
  useGetTMDBGenresQuery,
  useGetContentDataQuery,
} = apiTMDB;
