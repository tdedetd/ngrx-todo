import { Action } from "@ngrx/store";
import { TodoItem } from "src/app/models/todo-item";

export enum ETodoActions {
  LoadTodoList = '[Todo] Load Todo List',
  LoadTodoListSuccess = '[Todo] Load Todo List Success',
  AddItem = '[Todo] Add Item'
}

export class LoadTodoList implements Action {
  public readonly type = ETodoActions.LoadTodoList;
}

export class LoadTodoListSuccess implements Action {
  public readonly type = ETodoActions.LoadTodoListSuccess;
  constructor(public payload: TodoItem[]) {}
}

export class AddItem implements Action {
  public readonly type = ETodoActions.AddItem;
  constructor(public payload: string) {}
}

export type TodoActions =
  LoadTodoList |
  LoadTodoListSuccess |
  AddItem;
