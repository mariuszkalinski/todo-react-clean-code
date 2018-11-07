import * as React from 'react';

import { TodoList } from '../containers/Todo/TodoList.container';
import './App.css';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <p className="App-intro">
          Todo App
        </p>
        <TodoList />
      </div>
    );
  }
}

export default App;
