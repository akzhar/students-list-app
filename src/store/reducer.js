import {combineReducers} from 'redux';
import reducerActive from './reducer-active.js';
import reducerStudents from './reducer-students.js';
import reducerPopup from './reducer-popup.js';

const reducer = combineReducers({
  active: reducerActive,
  students: reducerStudents,
  popup: reducerPopup
});

export default reducer;
