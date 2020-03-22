require("dotenv").config();

function B2CAUTH() {
  const REDIRECT_URI =
    process.env.REACT_APP_REDIRECT_URI || "REDIRECT_URI is undefined";
  const TENANT = process.env.REACT_APP_TENANT || "TENANT is undefined";
  const APPLICATION_ID =
    process.env.REACT_APP_APPLICATION_ID || "APPLICATION_ID is undefined";
  const SCOPE = process.env.REACT_APP_SCOPE || "SCOPE is undefined";
  const SIGNIN_POLICY =
    process.env.REACT_APP_SIGNIN_POLICY || "SIGNIN_POLICY is undefined";

  return {
    tenant: TENANT,
    signInPolicy: SIGNIN_POLICY,
    applicationId: APPLICATION_ID,
    cacheLocation: "sessionStorage",
    scopes: [SCOPE],
    redirectUri: REDIRECT_URI,
    postLogoutRedirectUri: window.location.origin
  };
}

export default B2CAUTH;
