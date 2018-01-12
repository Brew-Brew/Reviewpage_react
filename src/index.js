/* eslint-disable */

import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reducer from './reducers';

const loggerMiddleware = createLogger();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(
      thunkMiddleware, // 함수를 dispatch() 하게 해줍니다
      loggerMiddleware, // 액션을 로깅하는 깔끔한 미들웨어입니다
    )
  )
);

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
