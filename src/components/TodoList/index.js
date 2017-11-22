import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import Todo from '../Todo';

import './TodoList.css';

const masonryOptions = {
  columnWidth: 250,
  gutter: 10,
  isFitWidth: true
};

export default class TodoList extends Component {
  render() {
    const { todos, onTodoDelete, onTodoCheck } = this.props;

    return (
      <Masonry
        className='grid'
        options={masonryOptions}
      >
        {
          todos.map(todo =>
            <Todo
              key={todo.id}
              id={todo.id}
              isChecked={todo.isChecked}
              color={todo.color}
              onDelete={onTodoDelete}
              onCheck={onTodoCheck}
            >
              {todo.text}
            </Todo>
          )
        }
      </Masonry>
    );
  }
}