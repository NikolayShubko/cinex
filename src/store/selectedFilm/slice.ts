import { createSlice } from "@reduxjs/toolkit";
import { Film } from "../../types/films";

interface FilmState {
  currentFilm: Film | null;
  backGroundImage: string | null;
}

const initialState: FilmState = {
  currentFilm: null,
  backGroundImage: null,
};

export const selectedFilm = createSlice({
  name: "selectedFilm",
  initialState: initialState,
  reducers: {
    setFilm(state, action) {
      state.currentFilm = action.payload;
    },
    setBackgroundImage(state, action) {
      state.backGroundImage = action.payload;
    },
  },
});

export const { setFilm, setBackgroundImage } = selectedFilm.actions;
export const selectedFilmReducer = selectedFilm.reducer;
