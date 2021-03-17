import {ActionType} from './actions.js';

const initialStateStudents = {
  isLoaded: false,
  items: []
};

const reducerStudents = (state, action) => {
  switch (action.type) {
    case ActionType.SET_STUDENTS_IS_LOADED:
      return {...state, isLoaded: true};
    case ActionType.UPDATE_STUDENTS_ITEMS:
      return {...state, items: action.payload};
    default:
      return {...state};
  }
};

export {initialStateStudents};
export default reducerStudents;
