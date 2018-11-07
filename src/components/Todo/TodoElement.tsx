
/* tslint:disable */

import * as React from 'react';

interface ITodoElementProps {
  title: string;
  description: string;
  id?: number;
  removeTodo: any;
}

export const TodoElement = ({
  title,
  description,
  id,
  removeTodo,
  }: ITodoElementProps) => (
  <div className="TodoElement">
    <div className="TodoElement__body">
      <span className="TodoElement__title">Title: {title}</span>
      <span>Desc: {description}</span>
    </div>
    <div className="TodoElement__delete">
      <button onClick={() => removeTodo(id)}>Remove</button>
    </div>
  </div>
);
