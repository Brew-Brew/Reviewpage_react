/* eslint-disable */
import { combineReducers } from 'redux';
import menu from './redux/menu/reducer';
import meta from './redux/meta/reducer';
import reviewData from './redux/reviews/reducer';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const rootReducer = combineReducers({
  router: routerReducer,
  reviewData,
  menu,
  meta,
});
export default rootReducer;
