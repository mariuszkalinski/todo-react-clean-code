import { ITodo, Todo } from './todo';

export class TodoList {
  public todos: ITodo[];

  public addTodo (
    title: string,
    description: string,
  ) {
    const id = new Date().valueOf();
    const currentTodo = new Todo(
      description,
      title,
      id,
    )

    this.todos.push(currentTodo)
  }

  public removeTodo (id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
