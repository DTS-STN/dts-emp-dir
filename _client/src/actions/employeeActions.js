//import axios from 'axios';
import { GET_EMPLOYEES, GET_EMPLOYEE_DETAILS, GET_EMPLOYEE_ORG, EMPLOYEE_LOADING } from './types';
//import { returnErrors } from './errorActions';


// Get Employees
export const getEmployees = ( searchTerm ) => dispatch => {
  return {
    type: GET_EMPLOYEES
  }
  // dispatch(setLoading());
  // axios
  //   .get('/locations')
  //   .then(res =>
  //     dispatch({
  //       type: GET_EMPLOYEES,
  //       payload: res.data
  //     })
  //   )
  //   .catch(err =>
  //     dispatch(returnErrors(err.response.data, err.response.status))
  //   );
};

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

export const setLoading = () => {
  return {
    type: EMPLOYEE_LOADING
  };
};

