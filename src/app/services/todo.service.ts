import { Injectable } from "@angular/core";
import { TodoItem } from "../models/todo-item";

@Injectable()
export class TodoService {

  private readonly key = 'items';

  load(): TodoItem[] | null {
    const itemsStr = localStorage.getItem(this.key);
    if (!itemsStr) return null;

    let items!: TodoItem[];
    try {
      items = JSON.parse(itemsStr);
    } catch (err) {
      if (err instanceof SyntaxError) return null;
    }

    items.forEach((item, i) => item.id = i);
    return items;
  }

  save(items: TodoItem[]) {
    localStorage.setItem(this.key, JSON.stringify(items));
  }
}
