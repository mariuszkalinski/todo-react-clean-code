import { connect } from 'react-redux';
import { TodoList as ToDoListView } from '../../components/Todo/TodoList';
import {
  addTodoAction,
  removeTodoAction,
  // todosSelector
} from '../../core/lib/adapters/redux/todoList';
import { IStateType } from '../../core/lib/frameworks/redux';

const mapStateToProps = (state: IStateType) => ({
  todos: state.todoList.todos,
});

const mapDispatchToProps = {
  addTodo: addTodoAction,
  removeTodo: removeTodoAction,
};

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoListView as any);