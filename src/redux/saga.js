import { call, put, takeLatest } from 'redux-saga/effects';

import { receiveApiList, receiveApiRecord } from './action';
import { REQUEST_API_LIST, REQUEST_API_RECORD } from './constant';
import { fetchData } from '../request';

/**
 * worker Saga: will be fired on
 * USER_FETCH_REQUESTED actions
 *
 * @param {object} action
 */
function* getApiList(action) {
  try {
    // do api call
    const list = yield call(fetchData(action.endpoint));
    yield put(receiveApiList(list.results));
  } catch (e) {
    console.log(e);
  }
}

function* getApiRecord(action) {
  try {
    // do api call
    const record = yield call(fetchData(action.propID));
    yield put(receiveApiRecord(record.results));
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
  yield [
   takeLatest(REQUEST_API_LIST, getApiList),
   takeLatest(REQUEST_API_RECORD, getApiRecord)
  ]
}
