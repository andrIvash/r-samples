import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

export default class Todo extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCheck : PropTypes.func.isRequired,
    color : PropTypes.string.isRequired,
    children : PropTypes.node,
    isChecked : PropTypes.bool.isRequired
  };


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
    const { id, color, children, isChecked } = this.props;

    return (
      <div className="todo" style={{ backgroundColor: color }}>
        <button className="todo__delete-icon" onClick={this.handleDelete}> × </button>
        <div className="todo__content">
          {children}
        </div>
        <div className="todo__info">
          <input
            id={id}
            name="check"
            type="checkbox"
            className="todo__checkbox"
            checked={isChecked}
            onChange={this.handleCheck}
          />
          <label htmlFor={id} className="todo__label">Done</label>
        </div>
      </div>
    );
  }
}