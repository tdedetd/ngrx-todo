import { initialTodoState, TodoState } from "./todo.state";

export interface AppState {
  todo: TodoState
}

export const initialAppState: AppState = {
  todo: initialTodoState
}
