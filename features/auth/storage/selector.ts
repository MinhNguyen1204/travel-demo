import { RootState } from "@storage/store";

export const getIsAuthenticated = (state: RootState) => {
  const token = localStorage.getItem("token");
  return !!token || state.auth.isAuthenticated;
};

export const getUserInfo = (state: RootState) => state.auth.user;
