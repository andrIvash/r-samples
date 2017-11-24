import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './index';

Date.now = jest.fn(() => 1487076708000);

it('Todo component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo
    key={Date.now()}
    id={Date.now()}
    isChecked={false}
    color={'red'}
    onDelete={() => {}}
    onCheck={() => {}}
  />, div);
});