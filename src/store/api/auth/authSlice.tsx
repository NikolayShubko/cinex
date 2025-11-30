import { createSlice } from "@reduxjs/toolkit";

interface AuthInterface {
  token: string | null;
  isLogin: boolean;
}
const initialState: AuthInterface = {
  token: null,
  isLogin: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.token = null;
    },
  },
});

export const { setToken, setIsLogin, logout } = authSlice.actions;
export default authSlice.reducer;
