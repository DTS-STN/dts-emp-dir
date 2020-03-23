import axios from 'axios';
import { SET_EMPLOYEES, GET_EMPLOYEE_DETAILS, GET_EMPLOYEE_ORG, EMPLOYEE_LOADING, FILTER_EMPLOYEES } from './types';
import { returnErrors } from './errorActions';


// Get Employees
export const fetchEmployees = () => dispatch => {
  dispatch(setLoading());
  return axios
    .get('/api/employees')
    .then( res =>
      dispatch(setEmployees(res.data))
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
  // dispatch(setLoading());
  // axios
  //   .get('/api/employees')
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

// Set Employees
export const setEmployees = (data) => {
  return {
    type: SET_EMPLOYEES,
    payload: data
  }
}

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
    payload: searchTerm
  }
}

export const setLoading = () => {
  return {
    type: EMPLOYEE_LOADING
  };
};

