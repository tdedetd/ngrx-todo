import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { AddItem } from 'src/app/store/actions/todo.actions';
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

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onAddItemClick() {
    this.addItem();
  }

  private addItem() {
    this.store.dispatch(new AddItem(this.addItemText));
    this.addItemText = '';
  }

}
