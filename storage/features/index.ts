import authQuery from "./auth/service";
import { authSlice } from "./auth";
import { loaderSlice } from "./loader";

export const slices = {
  auth: authSlice,
  loader: loaderSlice,
};

export const queries = {
  [authQuery.reducerPath]: authQuery.reducer,
};

export const middlewares = [authQuery.middleware];
