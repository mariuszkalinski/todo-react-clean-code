import { ITodo, Todo } from '../../entities/todo';
import { TodoList } from '../../entities/todoList';
import { IStateType } from "../../frameworks/redux";
import { TodoInteractor } from '../../useCases/todoInteractor';

const initialState = new TodoList([
  new Todo(
    '3.2% fat',
    'buy milk',
    1,
  ),
]);

const ADD_TODO = 'todoList/add_todo';
const REMOVE_TODO = 'todoList/remove_todo';

export const todosSelector = (state: IStateType): TodoList => state.todoList;

export const addTodoAction = (payload: ITodo) => ({
  payload,
  type: ADD_TODO, 
});

export const removeTodoAction = (payload: number) => ({
  payload,
  type: REMOVE_TODO, 
});

const addTodoReducer = (
  todoList: any,
  action: any,
) => {
  const interactor = new TodoInteractor(todoList.todos);
  const {title, description} = action.payload;
  interactor.addTodo(title, description);

  return new TodoList(interactor.list.todos);
};

const removeTodoReducer = (
  todoList: any,
  action: any,
) => {
  const interactor = new TodoInteractor(todoList.todos);
  interactor.removeTodo(action.payload);

  return new TodoList(interactor.list.todos);
};

export const todoListReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case ADD_TODO:
      return addTodoReducer(state, action);
    case REMOVE_TODO:
      return removeTodoReducer(state, action);
    default:
      return state;
  }
}