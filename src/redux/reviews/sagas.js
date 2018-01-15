import { takeEvery, put, call } from 'redux-saga/effects';
import { delay} from 'redux-saga';

import {select } from 'redux-saga/effects'

import * as service from '../../services/reviews';
import { Actions, receiveReviews, requestReviews, nextReviews} from './action';
import { receiveMenus,requestMenu } from '../menu/action';
import { addPage, pageZero } from '../meta/action';

const {
  FETCH_REVIEW,
  FETCH_NEXT_REVIEW,
} = Actions;

export function* loadReviews(actions) {
  const { menuId } = actions;
  yield put(requestReviews());
  try {
    yield call(delay, 1000);
    const review = yield call(service.getReviews,menuId,0);
    yield put(pageZero());
    yield put(receiveReviews(review.data.result));
  } catch (error) {

  }
}

export function* loadNextReviews(actions) {
  const state = yield select();
  yield put(addPage(state.meta.reviewPage));
  const review = yield call(service.getReviews, state.reviewData.reviews[0].menuId, state.meta.reviewPage+5);
  yield put(nextReviews(review.data.result));
}


export function* watchReviews() {
  yield takeEvery(FETCH_REVIEW, loadReviews);
  yield takeEvery(FETCH_NEXT_REVIEW, loadNextReviews);
}
