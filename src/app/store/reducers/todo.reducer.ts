import { TodoItem } from "src/app/models/todo-item";
import { ETodoActions, TodoActions } from "../actions/todo.actions";
import { initialTodoState, TodoState } from "../state/todo.state";

export const todoReducer = (
  state: TodoState = initialTodoState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case ETodoActions.LoadTodoListSuccess: {
      const items = action.payload;
      const idNext = items.length === 0 ? 0 : Math.max(...items.map(item => item.id)) + 1;
      return { ...state, idNext, items };
    }
    case ETodoActions.AddItem:
      return {
        ...state,
        idNext: state.idNext + 1,
        items: [...state.items, { id: state.idNext, text: action.payload, checked: false }]
      };
    case ETodoActions.SetChecked: {
      const items = state.items;
      const editedItem = state.items.find(item => item.id === action.payload.id) as TodoItem;
      const index = items.indexOf(editedItem);

      return {
        ...state,
        items: [
          ...items.slice(0, index),
          { ...editedItem, checked: action.payload.checked },
          ...items.slice(index + 1, items.length)
        ]
      };
    }
    case ETodoActions.RemoveItem: {
      const items = state.items;
      const index = items.indexOf(action.payload);
      return {
        ...state,
        items: [
          ...items.slice(0, index),
          ...items.slice(index + 1, items.length)
        ]
      };
    }
    default:
      return state;
  }
}
