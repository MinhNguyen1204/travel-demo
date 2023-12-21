import authQuery from "./auth/services";
import postQuery from "./post/services";
import { authSlice } from "./auth";
import { postSlice } from "./post";

export const slices = {
  auth: authSlice,
  post: postSlice,
};

export const queries = {
  [authQuery.reducerPath]: authQuery.reducer,
  [postQuery.reducerPath]: postQuery.reducer,
};

export const middlewares = [authQuery.middleware, postQuery.middleware];
