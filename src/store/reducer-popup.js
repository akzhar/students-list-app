import {ActionType} from './actions.js';

const initialStatePopup = {
  isOpen: false,
  message: ``,
};

const reducerPopup = (state, action) => {
  switch (action.type) {
    case ActionType.SET_POPUP_ISOPEN:
      return {...state, isOpen: action.payload};
    case ActionType.CHANGE_POPUP_MESSAGE:
      return {...state, message: action.payload};
    default:
      return {...state};
  }
};

export {initialStatePopup};
export default reducerPopup;
