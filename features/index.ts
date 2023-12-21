import authQuery from "./auth/service";
import homeQuery from "./post/service";
import { authSlice } from "./auth";
import { loaderSlice } from "./loader";
import { postSlice } from "./post";

export const slices = {
  auth: authSlice,
  loader: loaderSlice,
  post: postSlice,
};

export const queries = {
  [authQuery.reducerPath]: authQuery.reducer,
};

export const middlewares = [authQuery.middleware, homeQuery.middleware];
