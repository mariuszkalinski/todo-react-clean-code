import * as React from 'react';
import { ITodo } from 'src/core/lib/entities/todo';
import { TodoElement } from './TodoElement';
import { TodoForm } from './TodoForm';

import './TodoList.css';

interface ITodoListProps {
  todos: ITodo[];
  addTodo: () => any;
  removeTodo: (id: number) => any;
}

export const TodoList = ({ addTodo, todos, removeTodo }: ITodoListProps) => (
  <div className="TodoList">
    <div className="TodoList__wrapper">
      <TodoForm addTodo={addTodo} />
      <div className="TodoList__list">
        {
          !!todos.length && todos.map(({title, description, id}) => (
            <TodoElement
              title={title}
              description={description}
              id={id}
              removeTodo={removeTodo}
              key={id}
            />
          ))
        }
        {
          !todos.length && (
            <h2>List is empty</h2>
          )
        }
      </div>
    </div>
  </div>
);
