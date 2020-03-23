import { SET_EMPLOYEES, GET_EMPLOYEE_DETAILS, GET_EMPLOYEE_ORG, EMPLOYEE_LOADING, FILTER_EMPLOYEES } from '../actions/types'

const initialState = {
  data: [],
  searchTerm: '',
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYEES:
      return Object.assign({}, state, {
        ...state,
        data: action.payload,
        loading: false
      });
    case GET_EMPLOYEE_DETAILS:
      return {
        ...state,
        loading: false
      };
    case GET_EMPLOYEE_ORG:
      return {
        ...state,
        loading: false
      };
    case EMPLOYEE_LOADING:
      return {
        ...state,
        loading: true
      };
    case FILTER_EMPLOYEES:
      return Object.assign({}, state, {
        ...state,
        searchTerm: action.searchTerm
      });
    default:
      return state;
  }
}
