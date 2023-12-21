/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";

import homeQuery from "./service";

type HomeState = {
  posts: any[];
};

const initialState: HomeState = {
  posts: [],
};

const slice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      homeQuery.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        state.posts = action.payload;
      }
    );
  },
});

export const {} = slice.actions;
export const homeSlice = slice.reducer;
