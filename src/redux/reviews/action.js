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
  FETCH_REVIEW: 'FETCH_REVIEW',
  FETCH_MENU: 'FETCH_MENU',
  FETCH_NEXT_REVIEW: 'FETCH_NEXT_REVIEW,'
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

export function fetchReview(menuId) {
  return {
    type: Actions.FETCH_REVIEW,
    menuId
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
  return {
    type: Actions.FETCH_REVIEW,
    menuId
  };
}
export function fetchNextReviews() {
  return {
    type: Actions.FETCH_NEXT_REVIEW,
  };
}

export function fetchNextReviewPage() {
  return {
    type: Actions.FETCH_NEXT_REVIEW,
  };
}
