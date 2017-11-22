import React, { Component } from 'react';

import './Todo.css';

export default class Todo extends Component {

  handleDelete = () => {
    const { id, onDelete } = this.props;

    if (onDelete) {
      onDelete(id);
    }
  };

  render() {
    const { color, children } = this.props;

    return (
      <div className="todo" style={{ backgroundColor: color }}>
        <button className="todo__delete-icon" onClick={this.handleDelete}> × </button>
        {children}
      </div>
    );
  }
}