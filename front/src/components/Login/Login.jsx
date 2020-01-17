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
      return <LoginForm onSubmit={this.handleSubmit} />
   }
}

export default connect(null, {login})(Login);
