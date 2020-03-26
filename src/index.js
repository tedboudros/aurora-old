import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import mainReducer from './store/store';
import App from './App';

const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
