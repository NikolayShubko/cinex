import { configureStore } from "@reduxjs/toolkit";
import { selectedFilmReducer } from "./selectedFilm/slice";
import { cinexApi } from "./api/api";

export const store = configureStore({
  reducer: { selectedFilmReducer, [cinexApi.reducerPath]: cinexApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cinexApi.middleware),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;
