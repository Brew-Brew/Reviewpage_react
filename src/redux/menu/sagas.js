import { takeEvery, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as service from '../../services/reviews';
import { Actions, receiveMenus,loadMenusRequest, setMenuId } from './action';
import { pageZero } from '../meta/action';
import {loadReviews} from '../reviews/action';

const {
  LOAD_MENU
} = Actions;


export function* loadMenus(actions) {
  const { menuType } = actions;
  yield put(loadMenusRequest(menuType));

  try {
    yield call(delay, 1000);
    const review = yield call(service.getMenus,menuType);
    yield put(pageZero());
    yield put(receiveMenus(review.data.result));
    
    yield put(loadReviews(undefined,menuType));

  } catch (error) {

  }
}

export function* watchMenus() {
  yield takeEvery(LOAD_MENU, loadMenus);
}
