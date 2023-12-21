import { createSlice } from "@reduxjs/toolkit";

import authQuery from "../services";

export type AuthState = {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  user: null,
};

const slice = createSlice({
  name: "home",
  initialState,
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authQuery.endpoints.login.matchFulfilled,
      (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.user = { ...action.payload };
        localStorage.setItem("token", action.payload.token);
      }
    );
  },
});

export const { logout } = slice.actions;
export const authSlice = slice.reducer;
