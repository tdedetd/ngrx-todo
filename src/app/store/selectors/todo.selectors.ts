import { createSelector } from "@ngrx/store";
import { AppState } from "../state";
import { TodoState } from "../state/todo.state";

const selectTodo = (state: AppState) => state.todo;

export const selectTodoItems = createSelector(
  selectTodo,
  (state: TodoState) => state.items
);
