import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "../state";
import { todoReducer } from "./todo.reducer";

export const reducers: ActionReducerMap<AppState, any> = {
  todo: todoReducer
}
