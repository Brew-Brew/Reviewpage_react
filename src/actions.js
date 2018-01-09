'use strict';
/*
 * action types
 */
import axios from 'axios';
import * as service from './services/reviews';

export const Actions = {
    SELECT_MENU: "SELECT_MENU",
    RECEIVE_REVIEWS: "RECEIVE_REVIEWS",
    NEXT_REVIEWS: "NEXT_REVIEWS",
    SELECT_REVIEWS: "SELECT_REVIEWS",
    REQUEST_POSTS: "REQUEST_POSTS",
    RECEIVE_MENUS: "RECEIVE_MENUS"
}


/*
 * action creators
 */


export function selectMenu(menuType) {
    return {
        type: Actions.SELECT_MENU,
        menuType
    };
}

export function receiveReviews(reviews) {
    return {
    	type:Actions.RECEIVE_REVIEWS,
    	reviews
    };
}
export function selectReviews(menuId) {
    return {
        type: Actions.SELECT_REVIEWS,
        menuId
    };
}
export function nextReviews(reviews) {
    return {
    	type:Actions.NEXT_REVIEWS,
    	reviews
    };
}
export function fetchReviews(menuId) {

  return dispatch => {
    service.getReviews(menuId).then(function(review){
      dispatch(receiveReviews(review.data.result));
    //  dispatch(receivePosts(review.data.result));
    })
  };
}
export function fetchMenus(menuType) {
  return dispatch => {
    service.getMenus(menuType,0).then(function(review){
      //console.log(review.data.result);
      dispatch(receiveMenus(review.data.result));
    //  dispatch(receivePosts(review.data.result));
    })
  };
}
export function receiveMenus(menus) {
    return {
    	type:Actions.RECEIVE_MENUS,
    	menus
    };
}
export function fetchNextReviewPage() {
  return (dispatch, getState) => {
      var {reviewPage,menuType}= getState();
      reviewPage*=5;
      console.log(reviewPage);
      service.getReviews(menuType,reviewPage).then(function(review){
        dispatch(nextReviews(review.data.result));
      //  dispatch(receivePosts(review.data.result));
      })
      //dispatch(nextReviews(reviewData));
  }
}
