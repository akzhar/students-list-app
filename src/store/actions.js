import createApi, {apiRoute} from '../api.js';

const api = createApi();

export const ActionType = {
  CHANGE_ACTIVE_SEARCH_SUBSTRING: `change/active/searchSubstring`,
  CHANGE_ACTIVE_SORTTYPE: `change/active/sortType`,
  SET_POPUP_ISOPEN: `set/popup/isOpen`,
  CHANGE_POPUP_MESSAGE: `change/popup/message`,
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
  getStudents: (onSuccess, onFail) => (dispatch, getState) => {
    api.get(apiRoute.get.students)
      .then((response) => {
        const students = response.data;
        dispatch({type: ActionType.UPDATE_STUDENTS_ITEMS, payload: students});
      })
      .then(() => {
        if (onSuccess) {
          onSuccess();
        }
      })
      .catch((error) => {
        if (onFail) {
          onFail();
        }
        throw error;
      });
  },
  addStudent: (studentData, onSuccess, onFail) => (dispatch, getState) => {
    const headers = {
      'Content-Type': `multipart/form-data`
    };
    api.post(apiRoute.post.student, studentData, {headers})
      .then((response) => {
        const newStudent = response.data;
        const students = getState().students.items.slice();
        dispatch({type: ActionType.UPDATE_STUDENTS_ITEMS, payload: [...students, newStudent]});
      })
      .then(() => {
        if (onSuccess) {
          onSuccess();
        }
      })
      .catch((error) => {
        if (onFail) {
          onFail();
        }
        throw error;
      });
  },
  removeStudent: (studentId, onSuccess, onFail) => (dispatch, getState) => {
    api.delete(apiRoute.delete.student(studentId))
      .then((response) => {
        const idToRemove = response;
        const students = getState().students.items.slice();
        const newStudents = students.filter((student) => student.id !== idToRemove);
        dispatch({type: ActionType.UPDATE_STUDENTS_ITEMS, payload: newStudents});
      })
      .then(() => {
        if (onSuccess) {
          onSuccess();
        }
      })
      .catch((error) => {
        if (onFail) {
          onFail();
        }
        throw error;
      });
  }
};
