import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import languageReducer from './languageReducer';
import employeeReducer from './employeeReducer';
import displayReducer from './displayReducer';
import azureadReducer from './azureadReducer';
import authReducer from './authReducer';

export default combineReducers({
  language: languageReducer,
  employees: employeeReducer,
  display: displayReducer,
  error: errorReducer,
  azuread: azureadReducer,
  auth: authReducer
});
