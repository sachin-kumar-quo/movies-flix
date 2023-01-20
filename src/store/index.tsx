import { configureStore } from "@reduxjs/toolkit";
import reducer, { reducerInitialState } from "./reducers";

export default configureStore({
  reducer: {
    reducer
  },
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: {
    reducer: reducerInitialState
  }
});