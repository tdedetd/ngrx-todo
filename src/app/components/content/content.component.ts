import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'todo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  items$: Observable<TodoItem[]> = of([
    {
      text: 'Item 1',
      checked: false
    },{
      text: 'Item 2',
      checked: false
    },
    {
      text: 'Item 3',
      checked: false
    }
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
