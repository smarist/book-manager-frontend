import { SET_IS_DELETING, SET_IS_POPUP_OPEN, SET_POPUP_COMPONENT } from '../actionTypes/popUpTypes';



export function setPopupComponent(data) {
  return (dispatch) => {
    dispatch({ type: SET_POPUP_COMPONENT, data });
  };
}

export function showPopup(data) {
  return (dispatch) => {
    dispatch({ type: SET_IS_POPUP_OPEN, data });
  };
}

export function setIsDeleting(data) {
  return (dispatch) => {
    dispatch({ type: SET_IS_DELETING, data });
  };
}

