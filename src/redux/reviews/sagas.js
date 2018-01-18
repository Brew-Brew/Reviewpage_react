import { takeEvery, put, call } from 'redux-saga/effects';
import { delay} from 'redux-saga';

import {select } from 'redux-saga/effects'

import * as service from '../../services/reviews';
import { Actions, receiveReviews, requestReviews, nextReviews, requestNextReviews, isEnd } from './action';
import { receiveMenus,requestMenu,setMenuId} from '../menu/action';
import { addPage, pageZero } from '../meta/action';

const {
  FETCH_REVIEW,
  FETCH_NEXT_REVIEW,
} = Actions;

export function* loadReviews(actions) {
  const { menuId, menuType } = actions;
  if(menuId){
    yield put(setMenuId(menuId));
  }
  const state = yield select();
  yield put(requestReviews());
  try {
    yield call(delay, 1000);
    const review = yield call(service.getReviews,menuId,menuType,0);
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
  yield put(requestNextReviews());
  try {
    yield call(delay, 1000);
    const state = yield select();
    yield put(addPage(state.meta.reviewPage));

    if(menuId){
      const review = yield call(service.getReviews, menuId, menuType, state.meta.reviewPage+5);
      yield put(nextReviews(review.data.result));
    }
    else{
      const review = yield call(service.getReviews, undefined, menuType, state.meta.reviewPage+5);
      yield put(nextReviews(review.data.result));
    }

  } catch (error) {

  }
}


export function* watchReviews() {
  yield takeEvery(FETCH_REVIEW, loadReviews);
  yield takeEvery(FETCH_NEXT_REVIEW, loadNextReviews);
}
