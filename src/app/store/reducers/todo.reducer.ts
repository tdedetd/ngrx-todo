import { TodoItem } from "src/app/models/todo-item";
import { ETodoActions, TodoActions } from "../actions/todo.actions";
import { initialTodoState, TodoState } from "../state/todo.state";

export const todoReducer = (
  state: TodoState = initialTodoState,
  action: TodoActions
): TodoState => {
  let items: TodoItem[];
  let index: number;

  switch (action.type) {
    case ETodoActions.LoadTodoListSuccess:
      return {
        ...state,
        items: action.payload
      };
    case ETodoActions.AddItem:
      return {
        ...state,
        items: [...state.items, { text: action.payload, checked: false }]
      };
    case ETodoActions.SetChecked:
      items = state.items;
      index = items.indexOf(action.payload.item);
      return {
        ...state,
        items: [
          ...items.slice(0, index),
          { ...action.payload.item, checked: action.payload.checked },
          ...items.slice(index + 1, items.length)
        ]
      };
    case ETodoActions.RemoveItem:
      items = state.items;
      index = items.indexOf(action.payload);
      return {
        ...state,
        items: [
          ...items.slice(0, index),
          ...items.slice(index + 1, items.length)
        ]
      };
    default:
      return state;
  }
}
