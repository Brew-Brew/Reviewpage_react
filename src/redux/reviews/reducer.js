import { Actions } from './action';

const {
  RECEIVE_REVIEWS,
  RECEIVE_MENUS,
  NEXT_REVIEWS,
  REQUEST_MENU,
  REQUEST_REVIEWS
} = Actions;

const reviewData = (state = {
  isFetching: false,
  reviews: []
}, action) => {
  switch (action.type) {
    case REQUEST_MENU:
      return Object.assign({}, state, {
        isFetching: true,
        reviews: []
      });
    case RECEIVE_MENUS:
      return Object.assign({}, state, {
        isFetching: false,
        reviews: []
      });
    case REQUEST_REVIEWS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, {
        isFetching: false,
        reviews: [...action.reviews]
      });
    case NEXT_REVIEWS:
      return Object.assign({}, state, {
        isFetching: false,
        reviews: [...state.reviews, ...action.reviews],
      });
    default:
      return state;
  }
};

export default reviewData;
