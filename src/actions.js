/*
 * action types
 */
import axios from 'axios';
import * as service from './services/reviews';

export const Actions = {
  SELECT_MENU: 'SELECT_MENU',
  RECEIVE_REVIEWS: 'RECEIVE_REVIEWS',
  NEXT_REVIEWS: 'NEXT_REVIEWS',
  SELECT_REVIEWS: 'SELECT_REVIEWS',
  REQUEST_POSTS: 'REQUEST_POSTS',
  RECEIVE_MENUS: 'RECEIVE_MENUS',
  ADD_PAGES: 'ADD_PAGES',
};

/*
 * action creators
 */

export function selectMenu(menuType) {
  return {
    type: Actions.SELECT_MENU,
    menuType,
  };
}

export function receiveReviews(reviews) {
  return {
    type: Actions.RECEIVE_REVIEWS,
    reviews,
  };
}

export function receiveMenus(menus) {
  return {
    type: Actions.RECEIVE_MENUS,
    menus,
  };
}

export function selectReviews(menuId) {
  return {
    type: Actions.SELECT_REVIEWS,
    menuId,
  };
}
export function nextReviews(reviews) {
  return {
    type: Actions.NEXT_REVIEWS,
    reviews,
  };
}
export function addPage(pagenum, limit = 5) {
  return {
    type: Actions.ADD_PAGES,
    pagenum,
    limit,
  };
}
export function fetchReviews(menuId) {
  return dispatch => {
    service.getReviews(menuId, 0).then(review => {
      dispatch(receiveReviews(review.data.result));
    });
  };
}
export function fetchMenus(menuType) {
  return dispatch => {
    // dispatch(requestMenus())
    service.getMenus(menuType).then(review => {
      dispatch(receiveMenus(review.data.result));
    });
  };
}

export function fetchNextReviewPage() {
  return (dispatch, getState) => {
    const { reviewData, meta } = getState();
    dispatch(addPage(meta.reviewPage));
    service.getReviews(reviewData[0].menuId, meta.reviewPage).then(review => {
      console.log(review.data.result);
      dispatch(nextReviews(review.data.result));
    });
  };
}
