import { configureStore } from "@reduxjs/toolkit";
import { selectedFilmReducer } from "./selectedFilm/slice";
import { cinexApi } from "./api/api";
import authReducer from "./api/auth/authSlice";
import { apiTMDB } from "./apiTMDB/api";
export const store = configureStore({
  reducer: {
    selectedFilmReducer,
    auth: authReducer,
    [cinexApi.reducerPath]: cinexApi.reducer,
    [apiTMDB.reducerPath]: apiTMDB.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTMDB.middleware),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDipatch = typeof store.dispatch;
