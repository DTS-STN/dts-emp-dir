import React from 'react';
import MainBody from './components/MainBody'
import Header from './components/Header'
import Footer from './components/Footer'

import I18nLoader from './components/I18nLoader'
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <I18nLoader>
        <div className='App'>
          <Header />
          {/* <AppNavbar /> */}
          <MainBody />
          <Footer />
        </div>
      </I18nLoader>
    </Provider>
  );
}

export default App;
