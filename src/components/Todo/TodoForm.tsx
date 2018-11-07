import * as React from 'react';

interface ITodoFormProps {
  addTodo: any;
}

export class TodoForm extends React.Component<ITodoFormProps> {
  public state = {
    description: '',
    title: '',
  }

  public handleTitleChange = (event: any) => {
    this.setState({title: event.target.value});
  }

  public handleDescriptionChange = (event: any) => {
    this.setState({description: event.target.value});
  }

  public handleSubmit = (event: any) => {
    event.preventDefault();
    const { title, description } = this.state;
    const todoData = { title, description };
    this.props.addTodo(todoData);
  }

  public render() {
    return (
      <div className="TodoForm">
        <form onSubmit={this.handleSubmit}>
          <input
            className="TodoFormInput"
            id="title"
            type="text"
            placeholder="Title"
            onChange={this.handleTitleChange}
          />
          <input
            className="TodoFormInput"
            id="description"
            type="text"
            placeholder="Description"
            onChange={this.handleDescriptionChange}
          />
          <input
            className="TodoFormButton"
            type="submit"
            value="Add Todo"
          />
        </form>
      </div>
    )
  }
}