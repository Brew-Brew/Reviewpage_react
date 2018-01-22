import { takeEvery, put, call } from 'redux-saga/effects';
import { delay} from 'redux-saga';
import {select } from 'redux-saga/effects'

import * as service from '../../services/reviews';
import { Actions, receiveReviews, loadReviewsRequest, receiveNextReviews, loadNextReviewsRequest, isEnd } from './action';
import { setMenuId} from '../menu/action';
import { setPage, pageZero } from '../meta/action';

const {
  LOAD_REVIEW,
  LOAD_NEXT_REVIEW,
} = Actions;

export function* loadReviews(actions) {
  const { menuId, menuType } = actions;
  if(menuId){
    yield put(setMenuId(menuId));
  }
  else{
    yield put(setMenuId(undefined));
  }

  yield put(loadReviewsRequest());
  try {
    yield call(delay, 1000);
    const review = yield call(service.getReviews,{menuId,menuType},0);

    yield put(pageZero());
    yield put(receiveReviews(review.data.result));
    if(review.data.next === undefined){
      yield put(isEnd());
    }
  } catch (error) {

  }
}


export function* loadNextReviews(actions) {
  const { menuId, menuType } = actions;
  yield put(loadNextReviewsRequest());

  try {
    yield call(delay, 1000);
    const state = yield select();
    const nextPage = state.meta.reviewPage
    yield put(setPage(nextPage));
    
    const review = yield call(service.getReviews, {menuId, menuType}, state.meta.reviewPage+5);
    yield put(receiveNextReviews(review.data.result));


  } catch (error) {

  }
}


export function* watchReviews() {
  yield takeEvery(LOAD_REVIEW, loadReviews);
  yield takeEvery(LOAD_NEXT_REVIEW, loadNextReviews);
}
