import students from '../mocks/students.json';

export const ActionType = {
  CHANGE_ACTIVE_SEARCH_SUBSTRING: `change/active/searchSubstring`,
  CHANGE_ACTIVE_SORTTYPE: `change/active/sortType`,
  SET_STUDENTS_IS_LOADED: `set/students/isLoaded`,
  UPDATE_STUDENTS_ITEMS: `update/students/items`
};

export const ActionCreator = {
  changeSearchSubstring: (newSearchSubstring) => ({type: ActionType.CHANGE_ACTIVE_SEARCH_SUBSTRING, payload: newSearchSubstring}),
  changeSortType: (newSortType) => ({type: ActionType.CHANGE_ACTIVE_SORTTYPE, payload: newSortType}),
  updateStudents: (dispatch, _getStore) => {
    dispatch({type: ActionType.SET_STUDENTS_IS_LOADED});
    dispatch({type: ActionType.UPDATE_STUDENTS_ITEMS, payload: students});
  }
};
