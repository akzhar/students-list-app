import {ActionType} from './actions.js';
import {SORT_OPTIONS} from '../const.js';

const initialState = {
  activeSort: SORT_OPTIONS[0],
  studentsIsLoaded: false,
  students: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVESORT:
      return {...state, activeSort: action.payload};
    case ActionType.SET_STUDENTS_IS_LOADED:
      return {...state, studentsIsLoaded: true};
    case ActionType.UPDATE_STUDENTS:
      return {...state, students: action.payload};
    default:
      return {...initialState};
  }
};

export default reducer;
