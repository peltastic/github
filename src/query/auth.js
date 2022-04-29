import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

  export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
      baseUrl:
        "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",
    }),
    endpoints: (builder) => ({
      authenticate: builder.query({
        query: (code) => ({
          url: `?client_id=ede2211fe6532022063f&client_secret=6d5597bd3d3e6f1cf64e513bdc13ef30276ddf12&code=${code}`,
          method: 'POST',
          headers: {
              "Accept": "application/json"
          }
        }),
      }),
    }),
  });
export const {
    useAuthenticateQuery,
  } = authApi;
  
