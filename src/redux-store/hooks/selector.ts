import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "..";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCounter = () => useAppSelector((state) => state.counter);

export const useUser = () => useAppSelector((state) => state.user);
