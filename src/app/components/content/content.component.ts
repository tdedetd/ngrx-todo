import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoItem } from 'src/app/models/todo-item';
import { selectTodoItems } from 'src/app/store/selectors/todo.selectors';
import { AppState } from 'src/app/store/state';

@Component({
  selector: 'todo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  items$: Observable<TodoItem[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.items$ = this.store.select(selectTodoItems);
  }

}
