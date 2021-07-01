import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TodoItem } from 'src/app/models/todo-item';
import { TodoService } from 'src/app/services/todo.service';
import { SetChecked } from 'src/app/store/actions/todo.actions';
import { selectTodoItems } from 'src/app/store/selectors/todo.selectors';
import { AppState } from 'src/app/store/state';

@Component({
  selector: 'todo-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TodoItemsComponent implements OnInit {

  items$: Observable<TodoItem[]>;

  constructor(private store: Store<AppState>,
              private todo: TodoService) { }

  ngOnInit(): void {
    this.items$ = this.store.select(selectTodoItems).pipe(
      tap(items => this.todo.save(items))
    );
  }

  onItemCheckedChange(item: TodoItem, checked: boolean) {
    this.store.dispatch(new SetChecked({ item, checked }));
  }

}
