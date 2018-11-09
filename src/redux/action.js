import { REQUEST_API_DATA, RECEIVE_API_DATA } from './constant';

export const requestApiData = endpoint => ({ type: REQUEST_API_DATA, endpoint });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });
