import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { counterSlice } from "../reducer/counter";

export type RootStore = ToolkitStore<{ counter: typeof counterSlice }>;
