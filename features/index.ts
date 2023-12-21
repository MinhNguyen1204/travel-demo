import authQuery from "./auth/service";
import homeQuery from "./home/service";
import { authSlice } from "./auth";
import { homeSlice } from "./home";
import { loaderSlice } from "./loader";

export const slices = {
  auth: authSlice,
  loader: loaderSlice,
  home: homeSlice,
};

export const queries = {
  [authQuery.reducerPath]: authQuery.reducer,
};

export const middlewares = [authQuery.middleware, homeQuery.middleware];
