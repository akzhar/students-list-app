import {combineReducers} from 'redux';
import reducerActive, {initialStateActive} from './reducer-active.js';
import reducerStudents, {initialStateStudents} from './reducer-students.js';

const initialState = {
  active: initialStateActive,
  students: initialStateStudents
};

const reducer = combineReducers({
  active: reducerActive,
  students: reducerStudents
});

export {initialState};
export default reducer;
