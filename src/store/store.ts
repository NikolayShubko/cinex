import { configureStore } from "@reduxjs/toolkit";
import { selectedFilmReducer } from "./selectedFilm/slice";

export const store = configureStore({ reducer: { selectedFilmReducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;
