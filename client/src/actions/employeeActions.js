import { GET_EMPLOYEE_BY_ID, GET_EMPLOYEE_BY_NAME, GET_EMPLOYEE_DETAILS, GET_EMPLOYEE_ORG, EMPLOYEE_LOADING} from './types';

// Get Employee by Id 
export const getEmployeeById = ( id ) => dispatch => {
  dispatch(setLoading());
  return {
    type: GET_EMPLOYEE_BY_ID,
    payload: id 
  };
};

// Get Employee by Id 
export const getEmployeeByName = ( employee ) => {
  return {
    type: GET_EMPLOYEE_BY_NAME,
    payload: employee
  };
};

// Get Employee by Id 
export const getEmployeeDetails = ( employee ) => {
  return {
    type: GET_EMPLOYEE_DETAILS,
    payload: employee
  };
};

// Get Employee by Id 
export const getEmployeeOrg = ( employee ) => {
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
