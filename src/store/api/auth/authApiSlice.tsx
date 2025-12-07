import { SignUpFormValues } from "../../../types/forms";
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
    register: build.mutation<void, SignUpFormValues>({
      query: ({
        username,
        email,
        password,
        plan,
        payMethod,
        cardInfo,
        device,
      }) => ({
        url: "/register",
        method: "POST",
        body: {
          username: username,
          email: email,
          password: password,
          plan: plan,
          payMethod: payMethod,
          cardInfo: cardInfo,
          device: device,
        },
      }),
    }),
  }),
});
export const { useLoginMutation, useLazyRefreshQuery, useRegisterMutation } =
  authApiSlice;
