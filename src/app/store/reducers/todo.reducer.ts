import { ETodoActions, TodoActions } from "../actions/todo.actions";
import { initialTodoState, TodoState } from "../state/todo.state";

export const todoReducer = (
  state = initialTodoState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case ETodoActions.LoadTodoListSuccess:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
