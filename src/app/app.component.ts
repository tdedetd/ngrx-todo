import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadTodoList } from './store/actions/todo.actions';
import { AppState } from './store/state';

@Component({
  selector: 'todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadTodoList());
  }
}
