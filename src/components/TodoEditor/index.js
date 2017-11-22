import React, { Component } from 'react';

import './TodoEditor.css';

const DEFAULT_COLOR = '#E6E7A3';

export default class TodoEditor extends Component {

  state = {
    text: ''
  };

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleTodoAdd = () => {
    if (this.state.text) {
      const newTodo = {
        text: this.state.text,
        color: DEFAULT_COLOR,
        id: Date.now(),
        isChecked: false
      };

      this.props.onTodoAdd(newTodo);
      this.resetState();
    }
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
                />

        <button className="editor__button" onClick={this.handleTodoAdd}>Add</button>
      </div>
    );
  }
}