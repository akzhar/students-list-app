import {ActionType} from './actions.js';

const initialStateStudents = {
  items: []
};

const reducerStudents = (state = initialStateStudents, action) => {
  switch (action.type) {
    case ActionType.UPDATE_STUDENTS_ITEMS:
      return {...state, items: action.payload};
    default:
      return {...state};
  }
};

export default reducerStudents;
