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
        reviewData: [],
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

/*
const reviews = (
  state = {
    reviewPage: 0,
    menuType: 'MAIN',
    menuId: '',
    menuName: '',
    menuNames: [],
    reviewData: [],
  },
  action
) => {
  switch (action.type) {
    case RECEIVE_MENUS:
      return Object.assign({}, state, { menuNames: action.menus });
    case ADD_PAGES:
      return Object.assign({}, state, {
        reviewPage: action.pagenum + action.limit,
      });
    case SELECT_MENU:
      return Object.assign({}, state, {
        menuType: action.menuType,
        reviewData: [],
      });
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, {
        menuType: state.menuType,
        menuNames: state.menuNames,
        reviewData: action.reviews,
        menuId: action.reviews[0].menuId,
      });
    case NEXT_REVIEWS:
      console.log(state.reviewData, action.reviews);
      return Object.assign({}, state, {
        menuType: state.menuType,
        menuNames: state.menuNames,
        reviewData: [...state.reviewData, ...action.reviews],
      });
    default:
      return state;
  }
};
*/

const rootReducer = combineReducers({
  reviewData,
  menu,
  meta
});
export default rootReducer;
