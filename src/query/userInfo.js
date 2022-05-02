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
      query: (arg) => {
        const { user, sortval } = arg;
        return {
          url: `users/${user}/repos?type=public&per_page=20&sort=${sortval}`,
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        };
      },
    }),
  }),
});

export const { useUsersQuery, useReposQuery } = userApi;
