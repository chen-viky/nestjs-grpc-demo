import { emitter } from "../../events";
import RootStore from "../RootStore";

export const addEventToStore = (store: RootStore) => {
  emitter.on("ADD", () => {
    store.counter.increase();
  });
};
