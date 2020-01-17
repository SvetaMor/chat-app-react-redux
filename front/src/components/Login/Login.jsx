import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component
{
   handleSubmit = (formData) => {
      const {setUsername} = this.props;
      setUsername(formData.username);
   }

   render() {
      return <LoginForm onSubmit={this.handleSubmit} />
   }
}

export default Login;
