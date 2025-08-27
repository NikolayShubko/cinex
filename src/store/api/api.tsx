import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setFilm } from "../selectedFilm/slice";
import { Film } from "../../components/types/films";
export const cinexApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://onlyjar-production.up.railway.app/",
  }),
  endpoints: () => ({}),
});
