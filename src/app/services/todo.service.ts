import { Injectable } from "@angular/core";
import { TodoItem } from "../models/todo-item";

@Injectable()
export class TodoService {

  private readonly key = 'items';

  load(): TodoItem[] {
    const items = localStorage.getItem(this.key);
    return items ? JSON.parse(items) : null;
  }

  save(items: TodoItem[]) {
    localStorage.setItem(this.key, JSON.stringify(items));
  }
}
