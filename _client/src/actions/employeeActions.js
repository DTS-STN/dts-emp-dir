import axios from 'axios';
import { SET_EMPLOYEES, GET_EMPLOYEE_DETAILS, GET_EMPLOYEE_ORG, EMPLOYEE_LOADING, FILTER_EMPLOYEES } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';


// Get Employees
export const fetchEmployees = () => (dispatch, getState) => {
  dispatch(setLoading());
  return axios
  .get('/api/employees', tokenConfig(getState))
  .then(res =>
      dispatch({
        type: SET_EMPLOYEES,
        payload: res.data
      })
    )
    .catch(err =>
      // console.log('Promise error: ' + err)
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Set Employees
// export const setEmployees = (data) => {
//   return {
//     type: SET_EMPLOYEES,
//     payload: data
//   }
// }

// Get Employee Details 
export const getEmployeeDetails = ( id ) => dispatch => {
  dispatch(setLoading());
  return {
    type: GET_EMPLOYEE_DETAILS,
    payload: id
  };
};

// Get Employee Organization
export const getEmployeeOrg = ( employee ) => dispatch => {
  dispatch(setLoading());
  return {
    type: GET_EMPLOYEE_ORG,
    payload: employee
  };
};

// Filter Employee List
export const filterEmployees = ( searchTerm  ) => {
  return {
    type: FILTER_EMPLOYEES,
    searchTerm
  }
}

export const setLoading = () => {
  return {
    type: EMPLOYEE_LOADING
  };
};
