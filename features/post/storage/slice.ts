/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";

import postQuery from "../services";

type PostState = {
  posts: any[];
};

const initialState: PostState = {
  posts: [],
};

const slice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postQuery.endpoints.getPosts.matchFulfilled,
      (state, action) => {
        state.posts = action.payload;
      },
    );
  },
});

export const {} = slice.actions;
export const postSlice = slice.reducer;
