import {ActionType} from './actions.js';
import {SORT_TYPES} from '../const.js';

const initialStateActive = {
  searchSubstring: ``,
  sortType: SORT_TYPES[0],
};

const reducerActive = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_SEARCH_SUBSTRING:
      return {...state, searchSubstring: action.payload};
    case ActionType.CHANGE_ACTIVE_SORTTYPE:
      return {...state, sortType: action.payload};
    default:
      return {...state};
  }
};

export {initialStateActive};
export default reducerActive;
