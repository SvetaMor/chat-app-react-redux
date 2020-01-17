import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class LoginForm extends Component
{
   render() {
      const {handleSubmit} = this.props;
      return (
         <form onSubmit={handleSubmit}>
             <label>Username:</label>
             <Field name="username" component="input" type="text"
                    placeholder='Username' required/>
             <button type="submit">Log in</button>
         </form>
      )
   }
}

export default reduxForm({form: 'login'})(LoginForm)
