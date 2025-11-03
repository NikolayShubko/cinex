import { cinexApi } from "../api";

export const authApiSlice = cinexApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ username, password }) => ({
        url: "/login",
        method: "POST",
        body: { username: username, password: password },
      }),
    }),
  }),
});
export const { useLoginMutation } = authApiSlice;
