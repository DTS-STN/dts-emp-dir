import { GET_EMPLOYEES, GET_EMPLOYEE_DETAILS, GET_EMPLOYEE_ORG, EMPLOYEE_LOADING } from '../actions/types'

const initialState = {
  employee: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employee: action.payload,
        loading: false
      };
    case GET_EMPLOYEE_DETAILS:
      return {
        ...state,
        employee: action.payload,
        loading: false
      };
    case GET_EMPLOYEE_ORG:
      return {
        ...state,
        employee: action.payload,
        loading: false
      };
    case EMPLOYEE_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
