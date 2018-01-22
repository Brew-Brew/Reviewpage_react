
export const Actions = {
  RECEIVE_MENUS: 'RECEIVE_MENUS',
  RECEIVE_REVIEWS: 'RECEIVE_REVIEWS',
  RECEIVE_NEXT_REVIEWS: 'RECEIVE_NEXT_REVIEWS',
  REQUEST_REVIEWS: 'REQUEST_REVIEWS',
  REQUEST_MENUS: 'REQUEST_MENUS',
  LOAD_REVIEW: 'LOAD_REVIEW',
  FETCH_MENU: 'FETCH_MENU',
  LOAD_NEXT_REVIEW: 'LOAD_NEXT_REVIEW',
  REQUEST_NEXT_REVIEWS: 'REQUEST_NEXT_REVIEWS',
  IS_END: 'IS_END',
};

/*
 * action creators
 */


 export function loadReviews(menuId,menuType) {
   return {
     type: Actions.LOAD_REVIEW,
     menuId,
     menuType,
   };
 }

 export function loadReviewsRequest() {
   return {
     type: Actions.REQUEST_REVIEWS,
   }
 }

 export function receiveReviews(reviews) {
   return {
     type: Actions.RECEIVE_REVIEWS,
     reviews,
   };
 }

export function loadNextReviews(menuId,menuType) {
  return {
    type: Actions.LOAD_NEXT_REVIEW,
    menuId,
    menuType,
  };
}

export function loadNextReviewsRequest() {
  return {
    type: Actions.REQUEST_NEXT_REVIEWS,
  }
}

export function receiveNextReviews(reviews) {
  return {
    type: Actions.RECEIVE_NEXT_REVIEWS,
    reviews,
  };
}

export function isEnd() {
  return {
    type: Actions.IS_END,
  };
}
