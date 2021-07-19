import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TodoItem } from 'src/app/models/todo-item';
import { TodoService } from 'src/app/services/todo.service';
import { AddItem } from 'src/app/store/actions/todo.actions';
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

  addItemText = '';

  items$: Observable<TodoItem[]>;

  constructor(private store: Store<AppState>,
              private todo: TodoService) { }

  ngOnInit(): void {
    this.items$ = this.store.select(selectTodoItems).pipe(
      tap(items => this.todo.save(items))
    );
  }

  onAddItemClick() {
    this.addItem();
  }

  onInputItemEnter() {
    if (this.addItemText) {
      this.addItem();
    }
  }

  private addItem() {
    this.store.dispatch(new AddItem(this.addItemText));
    this.addItemText = '';
    
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
  }

}
