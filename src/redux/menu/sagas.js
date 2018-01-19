import { takeEvery, put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as service from '../../services/reviews';
import { Actions, receiveMenus,requestMenu, setMenuId } from './action';
import { pageZero } from '../meta/action';
import {receiveReviews, fetchReviews} from '../reviews/action';

const {
  FETCH_MENU
} = Actions;


export function* loadMenus(actions) {
  const { menuType } = actions;
  yield put(requestMenu(menuType));
  try {
    yield call(delay, 1000);
    const review = yield call(service.getMenus,menuType);
    yield put(setMenuId(''));
    yield put(pageZero());
    yield put(receiveMenus(review.data.result));
    yield put(fetchReviews(undefined,menuType));
    //Yiled put(fetchReviews(menuType))
    /*
    const firstReview = yield call(service.getReviews,menuId,0);
    yield put(receiveReviews(firstReview.data.result));
    */
  } catch (error) {

  }
}

export function* watchMenus() {
  yield takeEvery(FETCH_MENU, loadMenus);
}
