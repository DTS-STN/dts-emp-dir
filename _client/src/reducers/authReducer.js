import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isAdmin: null,
  isSuperUser: null,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  console.log('Reducer')
  console.log(action.type)
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED: 
      {
        //console.log (action.payload.role)
        switch (action.payload.role) { 
          case  'superuser' : 
            return {
              ...state,
              isAuthenticated: true,
              isSuperUser: true,
              isAdmin: false,
              isLoading: false,
              user: action.payload
            };
          case 'Admin': 
            return {
              ...state,
              isAuthenticated: true,
              isSuperUser: false,
              isAdmin: true,
              isLoading: false,
              user: action.payload
            };
          default: 
            return {
              ...state,
              isAuthenticated: true,
              isSuperUser: false,
              isAdmin: false,
              isLoading: false,
              user: action.payload
            };
          }
        }
    case LOGIN_SUCCESS:
        {
          localStorage.setItem('token', action.payload.token);
          console.log (action.payload)
          switch (action.payload.user.role) { 
            case  'superuser' : 
              return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isSuperUser: true,
                isAdmin: false,
                isLoading: false,
                user: action.payload.user
              };
            case 'Admin': 
              return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isSuperUser: false,
                isAdmin: true,
                isLoading: false,
                user: action.payload.user
              };
            default: 
              return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isSuperUser: false,
                isAdmin: false,
                isLoading: false,
                user: action.payload.user
              };
            }
          }
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isAdmin: false,
        isSuperUser: false,
        isLoading: false
      };
    default:
      return state;
  }
}
