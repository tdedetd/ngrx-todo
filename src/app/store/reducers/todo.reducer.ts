import { ETodoActions, TodoActions } from "../actions/todo.actions";
import { initialTodoState, TodoState } from "../state/todo.state";

export const todoReducer = (
  state: TodoState = initialTodoState,
  action: TodoActions
): TodoState => {
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
      const items = state.items;
      const index = items.indexOf(action.payload.item);
      return {
        ...state,
        items: [
          ...items.slice(0, index),
          { text: action.payload.item.text, checked: action.payload.checked },
          ...items.slice(index + 1, items.length)
        ]
      };
    default:
      return state;
  }
}
