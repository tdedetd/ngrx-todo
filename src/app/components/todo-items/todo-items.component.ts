import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { buffer, debounceTime } from 'rxjs/operators';

import { TodoItem } from 'src/app/models/todo-item';
import { RemoveItem, SetChecked } from 'src/app/store/actions/todo.actions';
import { AppState } from 'src/app/store/state';

type SetCheckedEvent = {id: number, checked: boolean};

@Component({
  selector: 'todo-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TodoItemsComponent implements OnInit {

  @Input() items: TodoItem[] | null;

  private setChecked$: Subject<SetCheckedEvent> = new Subject();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.setChecked$.pipe(
      buffer(this.setChecked$.pipe(debounceTime(500)))
    ).subscribe(data => {
      data.reduce((acc, curr) => {
        const existingItem = acc.find(item => item.id === curr.id);

        if (existingItem) existingItem.checked = curr.checked;
        else acc.push(curr);

        return acc;
      }, [] as SetCheckedEvent[]).forEach(event => this.store.dispatch(new SetChecked(event)));
    });
  }

  onItemCheckedChange(item: TodoItem, checked: boolean) {
    this.setChecked$.next({ id: item.id, checked });
  }

  onItemRemove(item: TodoItem) {
    this.store.dispatch(new RemoveItem(item));
  }

}
