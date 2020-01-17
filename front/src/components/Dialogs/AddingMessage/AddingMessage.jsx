import React, { Component } from 'react';
import AddingMessageForm from './AddingMessageForm';

class AddingMessage extends Component
{
   constructor(props) {
      super(props);
   }

   handleSubmit = (formData) => {
      this.props.getMessage(formData.message);
   }

   render () {
      return (
         <div>
            <AddingMessageForm onSubmit={this.handleSubmit} />
         </div>
      );
   }
}

export default AddingMessage;
