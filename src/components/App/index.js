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

  handleTodoCheck = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === todoId ? {...todo, isChecked : !todo.isChecked} : todo)
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
        <h2 className="app__header">Todo's List</h2>
        <TodoEditor onTodoAdd={this.handleTodoAdd} />
        <TodoList
          todos={this.state.todos.filter(todo => todo.isChecked !== true )}
          onTodoDelete={this.handleTodoDelete}
          onTodoCheck={this.handleTodoCheck}
        />
        <hr />
        <h2 className="app__header">Сompleted tasks</h2>
        <TodoList
          todos={this.state.todos.filter(todo => todo.isChecked !== false )}
          onTodoDelete={this.handleTodoDelete}
          onTodoCheck={this.handleTodoCheck}
        />
      </div>
    );
  }
}