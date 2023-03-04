import { combineReducers } from 'redux';
import popupReducer from './popUpReducer';

export default combineReducers({
  popup: popupReducer,
});
