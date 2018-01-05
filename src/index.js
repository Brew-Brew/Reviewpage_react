import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reviews from './reducers';
import { Provider } from 'react-redux';
import { selectMenu,receiveReviews } from './actions';

const store = createStore(reviews);
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
document.getElementById('root'));
