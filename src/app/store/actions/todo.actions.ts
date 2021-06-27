import { Action } from "@ngrx/store";
import { TodoItem } from "src/app/models/todo-item";

export enum ETodoActions {
  LoadTodoList = '[Todo] Load Todo List',
  LoadTodoListSuccess = '[Todo] Load Todo List Success',
}

export class LoadTodoList implements Action {
  public readonly type = ETodoActions.LoadTodoList;
}

export class LoadTodoListSuccess implements Action {
  public readonly type = ETodoActions.LoadTodoListSuccess;
  constructor(public payload: TodoItem[]) {}
}

export type TodoActions =
  LoadTodoList |
  LoadTodoListSuccess;
