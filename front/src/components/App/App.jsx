import React, { Component } from 'react';
import {connect} from 'react-redux';
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
            { !this.props.isAuth
               ? <Login setUsername={this.setUsername} />
               : <DialogsContainer username={this.state.username}
                                   setUsername={this.setUsername}
                 />
            }
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
    isAuth: state.app.isAuth
})

export default connect(mapStateToProps)(App);
