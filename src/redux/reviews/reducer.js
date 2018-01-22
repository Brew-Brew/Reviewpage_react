import { Actions } from './action';

const {
  REQUEST_MENUS,
  RECEIVE_MENUS,

  REQUEST_REVIEWS,
  RECEIVE_REVIEWS,

  REQUEST_NEXT_REVIEWS,
  RECEIVE_NEXT_REVIEWS,

  IS_END,
} = Actions;

const reviewData = (state = {
  isEnd: false,
  isFetching: false,
  reviews: []
}, action) => {
  switch (action.type) {

    //메뉴관련
    case REQUEST_MENUS:
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

    //리뷰관련
    case REQUEST_REVIEWS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, {
          isFetching: false,
          isEnd: false,
          reviews: [...action.reviews]
      });

    //next 리뷰관련
    case REQUEST_NEXT_REVIEWS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_NEXT_REVIEWS:
      return Object.assign({}, state, {
        isFetching: false,
        reviews: [...state.reviews, ...action.reviews],
      });
      
    //끝 표시
    case IS_END:
      return Object.assign({}, state, {
        isEnd: true,
      });
    default:
      return state;
  }
};

export default reviewData;
