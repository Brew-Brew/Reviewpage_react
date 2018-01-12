/* eslint-disable */
import { combineReducers } from 'redux';
import menu from './redux/menu/reducer';
import meta from './redux/meta/reducer';
import reviewData from './redux/reviews/reducer';

const rootReducer = combineReducers({
  reviewData,
  menu,
  meta,
});
export default rootReducer;
