import {
  AZURE_USERLOADING,
  AZURE_USERLOADED,
  AZURE_AUTHERROR,
  AZURE_LOGOUT
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AZURE_USERLOADING:
      return {
        ...state,
        isLoading: true
      };
    case AZURE_USERLOADED:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.getToken(),
        isAuthenticated: true,
        isLoading: false,
        // city: action.payload.userData().city,
        // country: action.payload.userData().country,
        // emails: action.payload.userData().emails,
        firstName: action.payload.userData().firstName,
        lastName: action.payload.userData().lastName,
        name: action.payload.userData().name,
        newuser: action.payload.userData().newuser
      };
    case AZURE_AUTHERROR:
    case AZURE_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
