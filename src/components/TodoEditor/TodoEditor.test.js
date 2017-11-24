import React from 'react';
import ReactDOM from 'react-dom';
import TodoEditor from './index';

it(' TodoEditor component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoEditor
    onTodoAdd = {() => {}}
  />, div);
});
