import { Film } from "../../../types/films";
import { setFilm } from "../../selectedFilm/slice";
import { cinexApi } from "../api";

export const contentApiSlice = cinexApi.injectEndpoints({
  endpoints: (build) => ({
    getContent: build.query<Film[] | null, string>({
      query: (endpoint) => endpoint,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setFilm(data?.[0]));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getContentById: build.query<Film, string>({
      query: (id) => "/api/v1/films/" + id,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setFilm(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    getByGenre: build.query<Film[], string>({
      query: (genre) => "api/v1/films/genres/" + genre,
    }),
  }),
});

export const {
  useGetContentQuery,
  useGetContentByIdQuery,
  useGetByGenreQuery,
} = contentApiSlice;
