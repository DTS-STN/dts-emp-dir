import AzureAuth from "../AzureAD";

import {
  AZURE_USERLOADING,
  AZURE_USERLOADED,
  AZURE_AUTHERROR,
  AZURE_LOGOUT
} from "./types";

const azure = new AzureAuth();

//
// Check Azure AD2BC token & load user data
//
export const loadAzureUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: AZURE_USERLOADING });

  if (azure.isLoggedIn()) {
    dispatch({
      type: AZURE_USERLOADED,
      payload: azure
    });
  } else {
    azure.logout();
    dispatch({
      type: AZURE_AUTHERROR
    });
  }
};

//
// Logout User
//
export const azureLogout = () => {
  azure.logout();
  return {
    type: AZURE_LOGOUT
  };
};

//
// Setup config/headers and token
//
export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  // If token, add to headers
  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};
