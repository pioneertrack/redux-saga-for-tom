import { combineReducers } from 'redux';
import { RECEIVE_API_DATA } from './constant';

/**
 * reducer
 *
 * @param {object} [state={}]
 * @param {object} { type, data }
 * @returns {object}
 */
const data = (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    default:
      return state;
  }
};

export default combineReducers({
  data
});
