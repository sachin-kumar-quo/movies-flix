import {
  Action,
  configureStore,
  ThunkAction
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer, { reducerInitialState } from "./reducers";

export const store = configureStore({
  reducer: {
    reducer
  },
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: {
    reducer: reducerInitialState
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;