import { TodoItem } from "src/app/models/todo-item";

export interface TodoState {
  idNext: number;
  items: TodoItem[];
}

export const initialTodoState: TodoState = {
  idNext: 0,
  items: []
};
