import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from 'rxjs/operators';

import { TODO_LIST_DEFAULT } from "src/app/const/todo-list-default";
import { ETodoActions, LoadTodoList, LoadTodoListSuccess } from "../actions/todo.actions";

@Injectable()
export class TodoEffects {

  loadTodoList$ = createEffect(() => this.actions$.pipe(
    ofType<LoadTodoList>(ETodoActions.LoadTodoList),
    map(() => new LoadTodoListSuccess(TODO_LIST_DEFAULT))
  ));

  constructor(
    private actions$: Actions
  ) {}
}
