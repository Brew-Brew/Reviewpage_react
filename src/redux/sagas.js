import { all } from 'redux-saga/effects';

import { watchReviews } from './reviews/sagas';
import { watchMenus } from './menu/sagas';


export default function* root() {
  yield all([watchReviews(),watchMenus()]);
}
