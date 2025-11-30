import { cinexApi } from "../api";

interface LoginResponse {
  accessToken: string;
}
interface LoginRequest {
  username: string;
  password: string;
  rememberMe: boolean;
}

export const authApiSlice = cinexApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: ({ username, password, rememberMe }) => ({
        url: "/login",
        method: "POST",
        body: {
          username: username,
          password: password,
          rememberMe: rememberMe,
        },
      }),
    }),
    refresh: build.query<LoginResponse, void>({
      query: () => ({
        url: "/refresh",
      }),
    }),
  }),
});
export const { useLoginMutation, useLazyRefreshQuery } = authApiSlice;
