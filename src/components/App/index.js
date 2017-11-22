import React, { Component } from 'react';

import TodoEditor from '../TodoEditor';
import TodoList from '../TodoList';

import './App.css';

export default class App extends Component {
  state = {
      todos: []
  };

  componentDidMount() {
    const savedTodo = JSON.parse(localStorage.getItem('todos'));
    if (savedTodo) {
      this.setState({ todos: savedTodo });
    }
  };

  componentDidUpdate() {
    const todos = JSON.stringify(this.state.todos);
    localStorage.setItem('todos', todos);
  };

  handleTodoDelete = (todoId) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    });
  };

  handleTodoAdd = (newTodo) => {
    this.setState({
      todos: [newTodo, ...this.state.todos]
    });
  };

  render() {
    return (
      <div className="app">
        <h1 className="app__header">Todo's List</h1>
        <TodoEditor onTodoAdd={this.handleTodoAdd} />
        <TodoList
          todos={this.state.todos}
          onTodoDelete={this.handleTodoDelete}
        />
      </div>
    );
  }
}