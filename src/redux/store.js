import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../query/auth";
import tokenReducer from "./reducers/token"

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    token: tokenReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware)
});