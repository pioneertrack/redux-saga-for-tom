import { combineReducers } from 'redux';
import { RECEIVE_API_LIST, RECEIVE_API_RECORD } from './constant';

const initialState = {
  list: [],
  record: []
}
/**
 * reducer
 *
 * @param {object} [state={}]
 * @param {object} action
 * @returns {object}
 */
const data = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_API_LIST:
      return {
        ...state,
        list: action.list
      };
    case RECEIVE_API_RECORD:
      return {
        ...state,
        record: action.record
      };
    default:
      return state;
  }
};

export default combineReducers({
  data
});
