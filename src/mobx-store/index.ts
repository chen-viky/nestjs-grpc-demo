import { createContext, useContext } from "react";
import { addEventToStore } from "./event";
import RootStore from "./RootStore";

export const store = new RootStore();

export const StoreContext = createContext(store);

export const useStore = <T extends keyof typeof store>(storeKey: T) => {
  const ctx = useContext(StoreContext);
  return ctx[storeKey];
};

addEventToStore(store);
