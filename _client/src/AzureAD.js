import b2cauth from 'react-azure-adb2c';
import decodeJWT from 'jwt-decode'; 

class AzureAuth {
  isLoggedIn() {
    if (b2cauth.getAccessToken()) {
      return true;
    }

    return false;
  }

  logout() {
    b2cauth.signOut();
  }

  getToken() {
    return b2cauth.getAccessToken();
  }

  userData() {
    const decoded = decodeJWT(b2cauth.getAccessToken());
    return {
      name: decoded.name,
      firstName: decoded.given_name,
      lastName: decoded.family_name,
      emails: decoded.emails,
      city: decoded.city,
      country: decoded.country,
      newuser: decoded.newuser
    };
  }
}

export default AzureAuth;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  