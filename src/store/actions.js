import students from '../mocks/students.json';

export const ActionType = {
  CHANGE_ACTIVESORT: `change/activeSort`,
  SET_STUDENTS_IS_LOADED: `set/studentsIsLoaded`,
  UPDATE_STUDENTS: `update/students`
};

export const ActionCreator = {
  changeActiveSort: (newActiveSort) => ({type: ActionType.CHANGE_ACTIVESORT, payload: newActiveSort}),
  updateStudents: (dispatch, _getStore) => {
    dispatch({type: ActionType.SET_STUDENTS_IS_LOADED});
    dispatch({type: ActionType.UPDATE_STUDENTS, payload: students});
  }
};
