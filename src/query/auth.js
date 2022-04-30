import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Config } from "../config/config";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",
  }),
  endpoints: (builder) => ({
    authenticate: builder.query({
      query: (code) => ({
        url: `?client_id=${Config.CLIENT_ID}&client_secret=${Config.CLIENT_SECRET}&code=${code}`,
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }),
    }),
  }),
});
export const { useAuthenticateQuery } = authApi;
