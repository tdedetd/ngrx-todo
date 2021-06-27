import { TodoItem } from "src/app/models/todo-item";

export interface TodoState {
  items: TodoItem[];
}

export const initialTodoState: TodoState = {
  items: []
};
