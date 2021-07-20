import { Action } from "@ngrx/store";
import { TodoItem } from "src/app/models/todo-item";

export enum ETodoActions {
  LoadTodoList = '[Todo] Load Todo List',
  LoadTodoListSuccess = '[Todo] Load Todo List Success',
  AddItem = '[Todo] Add Item',
  SetChecked = '[Todo] Set Checked',
  RemoveItem = '[Todo] Remove Item',
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

export class SetChecked implements Action {
  public readonly type = ETodoActions.SetChecked;
  constructor(public payload: { id: number, checked: boolean }) {}
}

export class RemoveItem implements Action {
  public readonly type = ETodoActions.RemoveItem;
  constructor(public payload: TodoItem) {}
}

export type TodoActions =
  LoadTodoList |
  LoadTodoListSuccess |
  AddItem |
  SetChecked |
  RemoveItem;
