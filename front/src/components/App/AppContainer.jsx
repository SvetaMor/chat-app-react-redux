import React, { Component } from 'react';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import App from './App';

class AppContainer extends Component
{
   render() {
      return <Provider store={store}>
               <App />
             </Provider>
   }
}

export default AppContainer;
