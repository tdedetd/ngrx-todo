import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from 'rxjs/operators';

import { TODO_LIST_DEFAULT } from "src/app/const/todo-list-default";
import { TodoService } from "src/app/services/todo.service";
import { ETodoActions, LoadTodoListSuccess } from "../actions/todo.actions";

@Injectable()
export class TodoEffects {

  loadTodoList$ = createEffect(() => this.actions$.pipe(
    ofType(ETodoActions.LoadTodoList),
    map(() => {
      const items = this.todo.load();
      return items || TODO_LIST_DEFAULT;
    }),
    map(items => new LoadTodoListSuccess(items))
  ));

  constructor(
    private actions$: Actions,
    private todo: TodoService
  ) {}
}
