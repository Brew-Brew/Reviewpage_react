import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reviews from './reducers';
import { Provider } from 'react-redux';
import { selectMenu,receiveReviews } from './actions';



const loggerMiddleware = createLogger();


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // 함수를 dispatch() 하게 해줍니다
  loggerMiddleware // 액션을 로깅하는 깔끔한 미들웨어입니다
)(createStore);

const store = createStoreWithMiddleware(reviews);
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
document.getElementById('root'));
