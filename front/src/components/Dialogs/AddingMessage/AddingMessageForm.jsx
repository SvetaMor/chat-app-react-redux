import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddingMessageForm extends Component
{
   constructor(props) {
      super(props);
   }

   render() {
      const {handleSubmit} = this.props;
      return (
         <form onSubmit={handleSubmit}>
            <Field name="message" component="textarea" type="text" />
            <input type="submit" value="Send" />
         </form>
      );
   }
}

export default reduxForm({form: 'addMessage'})(AddingMessageForm);
