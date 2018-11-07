import { ITodo } from '../entities/todo';
import { TodoList } from '../entities/todoList';

export class TodoInteractor {
  public initialTodoList: ITodo[] = [];
  public list: TodoList;
  private maximumTasksAmount: number = 5;

  constructor(
    public todosList: ITodo[],
  ) {
    // debugger; //tslint:disable-line
    this.list = new TodoList(todosList);
  }



  public addTodo (
    title: string,
    description: string,
  ) {
    if(this.list.todos.length >= this.maximumTasksAmount) {
      alert('Enough for today');
      return 'noop';
    }
    
    this.list.addTodo(title, description);

    return this.list.todos;
  }

  public removeTodo (id: number) {
    return this.list.removeTodo(id);
  }
}