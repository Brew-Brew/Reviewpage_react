/* eslint-disable */

import React from 'react';
import { combineReducers,createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { Switch, Route, Router} from 'react-router-dom';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import rootSaga from './redux/sagas';
import './index.css';
import reducer from './reducers';
import routes from './routes';
const loggerMiddleware = createLogger();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(
      routeMiddleware,
      sagaMiddleware,
      thunkMiddleware, // 함수를 dispatch() 하게 해줍니다
      loggerMiddleware, // 액션을 로깅하는 깔끔한 미들웨어입니다
    )
  )

);
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        {routes.map(({ ...routeProps }) => {
          console.log(routeProps);
            return <Route {...routeProps} key={routeProps.path || ''} />
        })}
      </Switch>
    </Router >
  </Provider>,
  document.getElementById('root')
);
