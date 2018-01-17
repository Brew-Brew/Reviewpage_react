import { Actions } from './action';

const {
  RECEIVE_REVIEWS,
  RECEIVE_MENUS,
  NEXT_REVIEWS,
  REQUEST_MENU,
  REQUEST_REVIEWS,
  REQUEST_NEXT_REVIEWS,
  IS_END,
} = Actions;

const reviewData = (state = {
  isEnd: false,
  isFetching: false,
  reviews: []
}, action) => {
  switch (action.type) {
    case REQUEST_MENU:
      return Object.assign({}, state, {
        isFetching: true,
        reviews: [],
        isEnd: false,
      });
    case RECEIVE_MENUS:
      return Object.assign({}, state, {
        isFetching: false,
        reviews: [],
        isEnd: false,
      });
    case REQUEST_REVIEWS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case REQUEST_NEXT_REVIEWS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, {
        isFetching: false,
        isEnd: false,
        reviews: [...action.reviews]
      });
    case NEXT_REVIEWS:
      return Object.assign({}, state, {
        isFetching: false,
        reviews: [...state.reviews, ...action.reviews],
      });
    case IS_END:
      return Object.assign({}, state, {
        isEnd: true,
      });
    default:
      return state;
  }
};

export default reviewData;
