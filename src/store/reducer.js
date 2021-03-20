import {combineReducers} from 'redux';
import reducerActive, {initialStateActive} from './reducer-active.js';
import reducerStudents, {initialStateStudents} from './reducer-students.js';
import reducerPopup, {initialStatePopup} from './reducer-popup.js';


const initialState = {
  active: initialStateActive,
  students: initialStateStudents,
  popup: initialStatePopup
};

const reducer = combineReducers({
  active: reducerActive,
  students: reducerStudents,
  popup: reducerPopup
});

export {initialState};
export default reducer;
