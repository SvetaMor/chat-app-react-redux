import React, { Component } from 'react';
import Login from '../Login/Login';
import DialogsContainer from '../Dialogs/DialogsContainer';

class App extends Component
{
   render() {
      return (
         <div>
            <Login />
            <DialogsContainer />
         </div>
      );
   }
}

export default App;
