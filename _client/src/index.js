import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import B2CAUTH from "./config/api";              UNCOMMENT when AZURE ADB2C is up 
// import b2cauth from "react-azure-adb2c";         UNCOMMENT when AZURE ADB2C is up 

import * as serviceWorker from './serviceWorker';

// b2cauth.initialize(B2CAUTH());                   UNCOMMENT when AZURE ADB2C is up 
// const AppStart = () => <App />;                  UNCOMMENT when AZURE ADB2C is up 

// b2cauth.run(() => {                                                  UNCOMMENT when AZURE ADB2C is up 
//   ReactDOM.render(<AppStart />, document.getElementById("root"));    UNCOMMENT when AZURE ADB2C is up 
// });                                                                  UNCOMMENT when AZURE ADB2C is up 


ReactDOM.render(<App />, document.getElementById('root'));         //DELETE AFTER AZURE AD2BC is up


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
