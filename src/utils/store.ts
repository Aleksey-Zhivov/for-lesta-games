import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { shipsReducer } from "./slices/shipsSlice";

export const rootReducer = combineReducers({
  ships: shipsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

//кастомизация для удобства работы со стором

export const useCustomDispatch: () => AppDispatch = () => dispatchHook();
export const useCustomSelector: TypedUseSelectorHook<RootState> = selectorHook;
