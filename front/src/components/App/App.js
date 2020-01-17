import React, { Component } from 'react';
import Login from '../Login/Login';
import DialogsContainer from '../Dialogs/DialogsContainer';

class App extends Component
{
   constructor(props) {
      super(props);
      this.state = {
         username: null
      };
   }

   setUsername = (username) => {
      this.setState({username});
   }

   render() {
      return (
         <div>
            { !this.state.username
               ? <Login setUsername={this.setUsername} />
               : <DialogsContainer username={this.state.username}/>
            }
         </div>
      );
   }
}

export default App;
