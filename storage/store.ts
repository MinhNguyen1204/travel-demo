import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import { middlewares, queries, slices } from "../features";

import { rtkQueryErrorLogger } from "./middlewares/errorToast";

export const rootReducer = combineReducers({
  ...slices,
  ...queries,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(...middlewares, rtkQueryErrorLogger),
  });
};

// Infer the type of makeStore
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const userAppSelector: TypedUseSelectorHook<AppStore> = useSelector;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

export default makeStore();
