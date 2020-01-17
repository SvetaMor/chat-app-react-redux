import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Label, Button } from '../../jss';

class LoginForm extends Component
{
   render() {
      const {handleSubmit} = this.props;
      return (
         <form onSubmit={handleSubmit}>
             <Label>Username:</Label>
             <Field name="username" component="input" type="text"
                    placeholder='Username' required/>
             <Button type="submit">Log in</Button>
         </form>
      )
   }
}

export default reduxForm({form: 'login'})(LoginForm)
