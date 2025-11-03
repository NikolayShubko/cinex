import { configureStore } from "@reduxjs/toolkit";
import { selectedFilmReducer } from "./selectedFilm/slice";
import { cinexApi } from "./api/api";
import authReducer from "./api/auth/authSlice";
export const store = configureStore({
  reducer: {
    selectedFilmReducer,
    auth: authReducer,
    [cinexApi.reducerPath]: cinexApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cinexApi.middleware),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;
