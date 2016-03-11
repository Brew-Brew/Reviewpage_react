'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Page from './containers/Page';
import configureStore from './configureStore'
import reviews from './reducers';

const store = configureStore();

const rootElement = document.getElementById('main');
ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  rootElement
);