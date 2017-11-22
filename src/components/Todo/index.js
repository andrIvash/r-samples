import React, { Component } from 'react';

import './Todo.css';

export default class Todo extends Component {

  handleDelete = () => {
    const { id, onDelete } = this.props;
    if (onDelete) {
      onDelete(id);
    }
  };

  handleCheck = () => {
    const { id, onCheck } = this.props;
    if (onCheck) {
      onCheck(id);
    }
  };

  render() {
    const { color, children, isChecked } = this.props;

    return (
      <div className="todo" style={{ backgroundColor: color }}>
        <button className="todo__delete-icon" onClick={this.handleDelete}> × </button>
        <div className="todo__content">
          {children}
        </div>
        <input
          type="checkbox"
          className="todo__checkbox"
          checked={isChecked}
          onChange={this.handleCheck}
        />
      </div>
    );
  }
}