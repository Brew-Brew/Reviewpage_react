'use strict';
import { combineReducers } from 'redux';
import { Actions } from './actions';
const {
    SELECT_MENU,
    RECEIVE_REVIEWS,
    NEXT_REVIEWS,
    RECEIVE_MENUS
} = Actions;

const reviews = (state = {
  reviewPage: 0,
  menuIdx: 0,
  menuType: 'MAIN',
  menuId: '',
  startDate: '',
  endDate: '',
  menuNames :[],
  reviewData: [],
  viewData: [],
  detailData: [],
}, action) => {
    switch (action.type) {
        case RECEIVE_MENUS:
          return Object.assign({}, state, { menuNames: action.menus});
        case SELECT_MENU:
            return Object.assign({}, state, { menuType: action.menuType,reviewData: []});
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, { menuType: state.menuType, menuNames: state.menuNames, reviewData: action.reviews});
        case NEXT_REVIEWS:
          return Object.assign({}, state, { menuType: state.menuType, menuNames: state.menuNames, reviewData: [...state.reviewData, ...action.reviews]});
        default:
            return state;
    }
}

export default reviews;
