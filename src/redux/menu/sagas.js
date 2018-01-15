import { takeEvery, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as service from '../../services/reviews';
import { Actions, receiveMenus,requestMenu } from './action';
import { pageZero } from '../meta/action';

const {
  FETCH_MENU
} = Actions;


export function* loadMenus(actions) {
  const { menuType } = actions;
  yield put(requestMenu(menuType));
  try {
    yield call(delay, 1000);
    const review = yield call(service.getMenus,menuType);
    yield put(pageZero());
    yield put(receiveMenus(review.data.result));
  } catch (error) {

  }
}

export function* watchMenus() {
  yield takeEvery(FETCH_MENU, loadMenus);
}
