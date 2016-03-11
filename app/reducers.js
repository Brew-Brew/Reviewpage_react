'use strict';
import { combineReducers } from 'redux';
import { Actions, MenuList } from './actions';
const {
    SELECT_MENU,
    RECEIVE_REVIEWS
} = Actions;

const reviews = (state = {
    menuIdx: 0,
    reviewPage: 0,
    reviews: []
}, action) => {
    switch (action.type) {
        case SELECT_MENU:
            return Object.assign({}, state, { menuIdx: action.menuIdx, reviewPage: 0, reviews: [] });
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, { reviewPage: state.reviewPage + 1, reviews: [...state.reviews, ...action.reviews] });
        default:
            return state;
    }
}

export default reviews;
