import { configureStore } from "@reduxjs/toolkit";
import { addEventToStore } from "./event";
import { reducer } from "./reducer";

export const reduxStore = configureStore({
  reducer,
});

// RootState作用是返回store的方法getState的类型 function
export type RootState = ReturnType<typeof reduxStore.getState>;

// AppDispatch 作用是拿到Store的dispatch方法的类型 function
export type AppDispatch = typeof reduxStore.dispatch;

addEventToStore(reduxStore);

export * from "./hooks";
