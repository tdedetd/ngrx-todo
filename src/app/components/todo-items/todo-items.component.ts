import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoItem } from 'src/app/models/todo-item';
import { RemoveItem, SetChecked } from 'src/app/store/actions/todo.actions';
import { AppState } from 'src/app/store/state';

@Component({
  selector: 'todo-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TodoItemsComponent implements OnInit {

  @Input() items: TodoItem[] | null;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onItemCheckedChange(item: TodoItem, checked: boolean) {
    this.store.dispatch(new SetChecked({ item, checked }));
  }

  onItemRemove(item: TodoItem) {
    this.store.dispatch(new RemoveItem(item));
  }

}
