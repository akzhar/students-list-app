import {ActionType} from './actions.js';
import {SORT_TYPES} from '../const.js';

const initialState = {
  searchSubstring: ``,
  sortType: SORT_TYPES[0],
  studentsIsLoaded: false,
  students: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SEARCH_SUBSTRING:
      return {...state, searchSubstring: action.payload};
    case ActionType.CHANGE_SORTTYPE:
      return {...state, sortType: action.payload};
    case ActionType.SET_STUDENTS_IS_LOADED:
      return {...state, studentsIsLoaded: true};
    case ActionType.UPDATE_STUDENTS:
      return {...state, students: action.payload};
    default:
      return {...initialState};
  }
};

export default reducer;
