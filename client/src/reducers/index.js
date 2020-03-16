import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import languageReducer from './languageReducer';
import employeeReducer from './employeeReducer';

export default combineReducers({
  language: languageReducer,
  error: errorReducer,
  employee: employeeReducer
});
