/* eslint-disable */
import { combineReducers } from 'redux';
import { Actions } from './actions';

const {
  SELECT_MENU,
  RECEIVE_REVIEWS,
  NEXT_REVIEWS,
  RECEIVE_MENUS,
  ADD_PAGES,
} = Actions;

const reviewData = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_MENUS:
      return [];
    case RECEIVE_REVIEWS:
      return [...action.reviews];
    case NEXT_REVIEWS:
      return [...state, ...action.reviews];
    default:
      return state;
  }
};

const menu = (
  state = {
    menuType: 'MAIN',
    menuId: '',
    menuName: '',
    menuNames: [],
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_MENUS:
      return Object.assign({}, state, { menuNames: action.menus });
    case SELECT_MENU:
      return Object.assign({}, state, {
        menuType: action.menuType,
      });
    default:
      return state;
  }
};

const meta = (
  state = {
    reviewPage: 0,
  },
  action
) => {
  switch (action.type) {
    case ADD_PAGES:
      return Object.assign({}, state, {
        reviewPage: action.pagenum + action.limit,
      });
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  reviewData,
  menu,
  meta
});
export default rootReducer;
