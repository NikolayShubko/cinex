import { createSlice } from "@reduxjs/toolkit";
import { Film } from "../../types/films";

interface FilmState {
  currentFilm: Film | null;
}

const initialState: FilmState = {
  currentFilm: null,
};

export const selectedFilm = createSlice({
  name: "selectedFilm",
  initialState: initialState,
  reducers: {
    setFilm(state, action) {
      state.currentFilm = action.payload;
    },
  },
});

export const { setFilm } = selectedFilm.actions;
export const selectedFilmReducer = selectedFilm.reducer;
