import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { emitter } from "../../events";
import { add } from "../reducer/counter";

export const addEventToStore = (store: ToolkitStore) => {
  emitter.on("ADD", () => {
    store.dispatch(add());
  });
};
