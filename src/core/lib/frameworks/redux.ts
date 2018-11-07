import {
  // applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import { createLogger } from 'redux-logger';
import { todoListReducer } from '../adapters/redux/todoList';
import { TodoList } from '../entities/todoList';

export interface IStateType {
  todoList: TodoList;
};

const reducers = {
  todoList: todoListReducer,
};

export const configureStore = () => {
  const middleware = [];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
  }

  return createStore(combineReducers(reducers), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
};