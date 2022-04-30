import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../query/auth";
import { userApi } from "../query/userInfo";
import tokenReducer from "./reducers/user";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: tokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});
