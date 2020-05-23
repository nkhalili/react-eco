import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import { configureStore } from './store';

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
