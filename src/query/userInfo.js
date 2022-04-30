// https://api.github.com/users
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (builder) => ({
    users: builder.query({
      query: (token) => ({
        url: "/user",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }),
     
    }),
     repos: builder.query({
        query: (user) => ({
          url: `users/${user}/repos?type=public&per_page=20`,
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        }),
      }),
  }),
});

export const { useUsersQuery, useReposQuery } = userApi;
