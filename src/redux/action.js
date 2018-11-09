import {
  REQUEST_API_LIST,
  RECEIVE_API_LIST,

  REQUEST_API_RECORD,
  RECEIVE_API_RECORD,
} from './constant';

export const requestApiList = endpoint => ({ type: REQUEST_API_LIST, endpoint });
export const receiveApiList = list => ({ type: RECEIVE_API_LIST, list });

export const requestApiRecord = propID => ({ type: REQUEST_API_RECORD, propID });
export const receiveApiRecord = record => ({ type: RECEIVE_API_RECORD, record });
