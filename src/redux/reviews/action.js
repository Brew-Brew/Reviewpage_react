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
  FETCH_NEXT_REVIEW: 'FETCH_NEXT_REVIEW',
  REQUEST_NEXT_REVIEWS: 'REQUEST_NEXT_REVIEWS',
  IS_END: 'IS_END',
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
export function requestNextReviews() {
  return {
    type: Actions.REQUEST_NEXT_REVIEWS,
  }
}
export function fetchReviews(menuId,menuType) {
  return {
    type: Actions.FETCH_REVIEW,
    menuId,
    menuType,
  };
}


export function fetchNextReviewPage(menuId,menuType) {
  return {
    type: Actions.FETCH_NEXT_REVIEW,
    menuId,
    menuType,
  };
}

export function isEnd() {
  return {
    type: Actions.IS_END,
  };
}
