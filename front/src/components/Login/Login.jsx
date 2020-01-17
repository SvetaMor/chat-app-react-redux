import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { login } from '../../redux/appReducer';
import { connect } from 'react-redux';

class Login extends Component
{
   handleSubmit = (formData) => {
      const {setUsername} = this.props;
      setUsername(formData.username);
      this.props.login(true);
   }

   render() {
      return <div>
               <h2>Welcome to our chat!</h2>
               <LoginForm onSubmit={this.handleSubmit} />
               <p>Sign in to start chatting</p>
            </div>
   }
}

export default connect(null, {login})(Login);
