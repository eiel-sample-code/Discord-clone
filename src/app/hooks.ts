import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;