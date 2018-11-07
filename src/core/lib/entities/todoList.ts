import { ITodo, Todo } from './todo';

export class TodoList {
  constructor(
    public todos: ITodo[],
  ) {}

  public addTodo (
    title: string,
    description: string,
  ) {
    const id = new Date().valueOf();
    const currentTodo = new Todo(
      title,
      description,
      id,
    )

    this.todos = [...this.todos, currentTodo];
  }

  public removeTodo (id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
