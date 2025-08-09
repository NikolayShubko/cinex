import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setFilm } from "../selectedFilm/slice";
import { Film } from "../../components/types/films";
export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://onlyjar-production.up.railway.app/",
  }),
  endpoints: (build) => ({
    getContent: build.query<Film[] | null, string>({
      query: (category) => category,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setFilm(data?.[0]));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useGetContentQuery } = filmsApi;
