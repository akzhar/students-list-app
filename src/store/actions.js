import mockStudents from '../mocks/students.json';

export const ActionType = {
  CHANGE_ACTIVE_SEARCH_SUBSTRING: `change/active/searchSubstring`,
  CHANGE_ACTIVE_SORTTYPE: `change/active/sortType`,
  SET_POPUP_ISOPEN: `set/popup/isOpen`,
  CHANGE_POPUP_MESSAGE: `change/popup/message`,
  SET_STUDENTS_IS_LOADED: `set/students/isLoaded`,
  UPDATE_STUDENTS_ITEMS: `update/students/items`
};

export const ActionCreator = {
  changeSearchSubstring: (newSearchSubstring) => ({type: ActionType.CHANGE_ACTIVE_SEARCH_SUBSTRING, payload: newSearchSubstring}),
  changeSortType: (newSortType) => ({type: ActionType.CHANGE_ACTIVE_SORTTYPE, payload: newSortType}),
  hidePopup: () => (dispatch, _getState) => {
    dispatch({type: ActionType.SET_POPUP_ISOPEN, payload: false});
    dispatch({type: ActionType.CHANGE_POPUP_MESSAGE, payload: ``});
  },
  showPopup: (message) => (dispatch, _getState) => {
    dispatch({type: ActionType.SET_POPUP_ISOPEN, payload: true});
    dispatch({type: ActionType.CHANGE_POPUP_MESSAGE, payload: message});
  },
  updateStudents: (onSuccess, _onFail) => (dispatch, _getState) => {

    // TODO: API call (GET)

    setTimeout(() => {
      dispatch({type: ActionType.SET_STUDENTS_IS_LOADED});
      dispatch({type: ActionType.UPDATE_STUDENTS_ITEMS, payload: mockStudents});
      if (onSuccess) {
        onSuccess();
      }
    }, 1000);
  },
  getStudent: (_studentId) => (_dispatch, _getState) => {
    // TODO: API call (GET studentId)
  },
  addStudent: (studentData, onSuccess, _onFail) => (dispatch, getState) => {

    // TODO: API call (POST studentData) - return new user id and avatar url

    setTimeout(() => {
      const students = getState().students.items.slice();
      const newStudent = Object.assign({}, studentData);
      newStudent.id = `neeeew`;
      newStudent.avatar = `https://www.placecage.com/300/300`;
      dispatch({type: ActionType.UPDATE_STUDENTS_ITEMS, payload: [...students, newStudent]});
      if (onSuccess) {
        onSuccess();
      }
    }, 1000);
  },
  removeStudent: (studentId, onSuccess, _onFail) => (dispatch, getState) => {

    // TODO: API call (DELETE studentId) - return removed user id

    const students = getState().students.items.slice();
    const newStudents = students.filter((student) => student.id !== studentId);
    setTimeout(() => {
      dispatch({type: ActionType.UPDATE_STUDENTS_ITEMS, payload: newStudents});
      if (onSuccess) {
        onSuccess();
      }
    }, 1000);
  }
};
