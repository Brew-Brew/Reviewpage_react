import { watchReviews } from './reviews/sagas';
import { watchMenus } from './menu/sagas';
import { all, spawn } from 'redux-saga/effects';

export default function* root() {
  yield all([watchReviews(),watchMenus()]);
}
