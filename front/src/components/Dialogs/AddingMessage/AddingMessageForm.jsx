import React, { Component } from 'react';
import { Field, reduxForm, change } from 'redux-form';

class AddingMessageForm extends Component
{
   constructor(props) {
      super(props);
      this.messageHandler = this.messageHandler.bind(this);
   }

   messageHandler = (e) => {
      if (e.keyCode===13){
         this.props.sendMessage(this.message.value);
         e.preventDefault();
         this.props.change('message', '');
      }
   }

   render() {
      const {handleSubmit} = this.props;
      return (
         <form onSubmit={handleSubmit}>
            <Field name="message" component="textarea" type="text"
                   ref={(el) => this.message = el} onKeyDown={this.messageHandler}
            />
            <input type="submit" value="Send" />
         </form>
      );
   }
}

export default reduxForm({form: 'addMessage'})(AddingMessageForm);
