import { Selector } from "@reduxjs/toolkit";

import { RootState } from "../../store";

import { LoaderState } from "./slice";

export const getLoaderState: Selector<RootState, LoaderState> = (
  state: RootState,
) => state.loader;
