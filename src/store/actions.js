import students from '../mocks/students.json';

export const ActionType = {
  CHANGE_SEARCH_SUBSTRING: `change/searchSubstring`,
  CHANGE_SORTTYPE: `change/sortType`,
  SET_STUDENTS_IS_LOADED: `set/studentsIsLoaded`,
  UPDATE_STUDENTS: `update/students`
};

export const ActionCreator = {
  changeSearchSubstring: (newSearchSubstring) => ({type: ActionType.CHANGE_SEARCH_SUBSTRING, payload: newSearchSubstring}),
  changeSortType: (newSortType) => ({type: ActionType.CHANGE_SORTTYPE, payload: newSortType}),
  updateStudents: (dispatch, _getStore) => {
    dispatch({type: ActionType.SET_STUDENTS_IS_LOADED});
    dispatch({type: ActionType.UPDATE_STUDENTS, payload: students});
  }
};
