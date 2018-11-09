import { call, put, takeLatest } from 'redux-saga/effects';

import { receiveApiData } from './action';
import { REQUEST_API_DATA } from './constant';
import { fetchData } from '../request';

/**
 * worker Saga: will be fired on
 * USER_FETCH_REQUESTED actions
 *
 * @param {object} action
 */
function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData(action.endpoint));
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If 'USER_FETCH_REQUESTED' gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
