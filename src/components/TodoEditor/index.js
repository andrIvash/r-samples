import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoEditor.css';

const DEFAULT_COLOR = '#E6E7A3';
const ENTER_KEYCODE = 13;

export default class TodoEditor extends Component {

  static propTypes = {
    onTodoAdd : PropTypes.func.isRequired
  };

  state = {
    text: ''
  };

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };


  handleEnterDown = (event) => {
    if (event.keyCode === ENTER_KEYCODE ) {
      this.addTodo();
    }
  };

  handleTodoAdd = () => {
    if (this.state.text) {
      this.addTodo();
    }
  };

  addTodo = () => {
    const newTodo = {
      text: this.state.text,
      color: DEFAULT_COLOR,
      id: Date.now(),
      isChecked: false
    };

    this.props.onTodoAdd(newTodo);
    this.resetState();
  };

  resetState = () => {
    this.setState({
      text: ''
    });
  };

  render() {
    return (
      <div className="editor">
                <textarea
                  rows={3}
                  placeholder="Enter your todo here..."
                  className="editor__textarea"
                  value={this.state.text}
                  onChange={this.handleTextChange}
                  onKeyDown={this.handleEnterDown}
                />

        <button className="editor__button" onClick={this.handleTodoAdd}>Add</button>
      </div>
    );
  }
}