import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './index';

it('TodoList component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList
    todos = {[]}
    onTodoDelete = {() => {}}
    onTodoCheck = {() => {}}
  />, div);
});
