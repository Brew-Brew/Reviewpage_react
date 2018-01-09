'use strict';
import { combineReducers } from 'redux';
import { Actions } from './actions';
const {
    SELECT_MENU,
    RECEIVE_REVIEWS,
    NEXT_REVIEWS,
    RECEIVE_MENUS,
    ADD_PAGES
} = Actions;

const reviews = (state = {
  reviewPage: 0,
  menuIdx: 0,
  menuType: 'MAIN',
  menuId: '',
  startDate: '',
  endDate: '',
  menuName: '',
  menuNames :[],
  reviewData: []
}, action) => {
    switch (action.type) {
        case RECEIVE_MENUS:
          return Object.assign({}, state, { menuNames: action.menus});
        case ADD_PAGES:
            return Object.assign({}, state, { reviewPage: action.pagenum+5});
        case SELECT_MENU:
            return Object.assign({}, state, { menuType: action.menuType,reviewData: []});
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, { menuType: state.menuType, menuNames: state.menuNames, reviewData: action.reviews, menuId: action.reviews[0].menuId});
        case NEXT_REVIEWS:
            console.log(state.reviewData,action.reviews);
            return Object.assign({}, state, { menuType: state.menuType, menuNames: state.menuNames, reviewData: [...state.reviewData, ...action.reviews]});
        default:
            return state;
    }
}

export default reviews;
