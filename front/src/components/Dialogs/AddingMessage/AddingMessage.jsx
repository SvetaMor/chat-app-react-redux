import React, { Component } from 'react';
import AddingMessageForm from './AddingMessageForm';

class AddingMessage extends Component
{
   sendMessage = (message) => {
      if(message!=='' && !!message)
         this.props.getMessage(message, this.props.username);
   }

   handleSubmit = (formData) => {
      this.sendMessage(formData.message);
      formData.message = '';
   }

   render () {
      return (
         <div>
            <AddingMessageForm onSubmit={this.handleSubmit}
                               sendMessage={this.sendMessage}
            />
         </div>
      );
   }
}

export default AddingMessage;
