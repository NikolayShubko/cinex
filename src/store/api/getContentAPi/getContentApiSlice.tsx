import { Film } from "../../../types/films";
import { setBackgroundImage, setFilm } from "../../selectedFilm/slice";
import { cinexApi } from "../api";

export const contentApiSlice = cinexApi.injectEndpoints({
  endpoints: (build) => ({
    getContent: build.query<Film[] | null, string>({
      query: (endpoint) => endpoint,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setFilm(data?.[0]));
          dispatch(setBackgroundImage(data?.[0].filmImageUrl));
        } catch (error) {
          if (error) {
            dispatch(
              setFilm({
                id: 10,
                title: "Oppenheimer",
                rating: 8.3,
                genres:
                  "Docudrama,Epic,Historical Epic,Psychological Drama,Biography,Drama,History",
                authors: "Christopher Nolan",
                releaseYear: 2023,
                durationMinutes: 180,
                description:
                  "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
                language: "eng",
                type: "Film",
                cast: "Cillian Murphy,Emily Blunt,Robert Downey Jr.,Alden Ehrenreich,Scott Grimes,Jason Clarke,Kurt Koehler,Tony Goldwyn,John Gowans,Macon Blair,James D'Arcy,Kenneth Branagh",
                coverImageUrl:
                  "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
                filmImageUrl:
                  "https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
                videoURL: "https://youtu.be/bK6ldnjE3Y0",
              })
            );
            dispatch(
              setBackgroundImage(
                "https://image.tmdb.org/t/p/original/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg"
              )
            );
            console.log(error, " from getContentApiSlice fallback");
          }
        }
      },
    }),
    getContentById: build.query<Film, string>({
      query: (id) => "/api/v1/films/" + id,
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setFilm(data));
          dispatch(setBackgroundImage(data.filmImageUrl));
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
