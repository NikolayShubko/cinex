import { configureStore } from "@reduxjs/toolkit";
import { selectedFilmReducer } from "./selectedFilm/slice";
import { filmsApi } from "./api/api";

export const store = configureStore({
  reducer: { selectedFilmReducer, [filmsApi.reducerPath]: filmsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;
