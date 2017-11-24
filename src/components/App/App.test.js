import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import 'jest-localstorage-mock';


it('App component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
