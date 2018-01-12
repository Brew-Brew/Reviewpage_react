/*
 * action types
 */
import axios from 'axios';
import * as service from '../../services/reviews';
import { receiveMenus,requestMenu } from '../menu/action';
import { addPage, pageZero } from '../meta/action';

export const Actions = {
  RECEIVE_MENUS: 'RECEIVE_MENUS',
  RECEIVE_REVIEWS: 'RECEIVE_REVIEWS',
  NEXT_REVIEWS: 'NEXT_REVIEWS',
  SELECT_REVIEWS: 'SELECT_REVIEWS',
  REQUEST_REVIEWS: 'REQUEST_REVIEWS',
  REQUEST_MENU: 'REQUEST_MENU',
};

/*
 * action creators
 */

export function receiveReviews(reviews) {
  return {
    type: Actions.RECEIVE_REVIEWS,
    reviews,
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
export function requestReviews() {
  return {
    type: Actions.REQUEST_REVIEWS,
  }
}
export function fetchReviews(menuId) {
  return dispatch => {
    dispatch(requestReviews());
    setTimeout(() => {
    service.getReviews(menuId, 0).then(review => {
      dispatch(pageZero());
      dispatch(receiveReviews(review.data.result));
    });
  },1000);
  };
}
export function fetchMenus(menuType) {
  return dispatch => {
    // dispatch(requestMenus())
    dispatch(requestMenu(menuType));
    setTimeout(() => {
    service.getMenus(menuType).then(review => {
      dispatch(pageZero());
      dispatch(receiveMenus(review.data.result));
    })
  },1000);
  };
}

export function fetchNextReviewPage() {
  return (dispatch, getState) => {
    const { reviewData, meta } = getState();
    dispatch(addPage(meta.reviewPage));
    service.getReviews(reviewData.reviews[0].menuId, meta.reviewPage+5).then(review => {
      console.log(review.data.result);
      dispatch(nextReviews(review.data.result));
    });
  };
}
