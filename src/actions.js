'use strict';
/*
 * action types
 */
import axios from 'axios';
import * as service from './services/reviews';

export const Actions = {
    SELECT_MENU: "SELECT_MENU",
    RECEIVE_REVIEWS: "RECEIVE_REVIEWS",
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
  export function fetchReviews(menuId) {

    return dispatch => {
      service.getReviews(menuId).then(function(review){
        //console.log(review.data.result);
        dispatch(receiveReviews(review.data.result));
      //  dispatch(receivePosts(review.data.result));
      })
    };
  }
  export function fetchMenus(menuType) {
    return dispatch => {
      service.getMenus(menuType).then(function(review){
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
        const { menuId} = getState();

    }
}
