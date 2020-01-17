import React, { Component } from 'react';

class DisplayMessages extends Component
{
   displayMessage = () =>
      this.props.messages.map((message, i) =>
         <div key={i}>
            {message.username}: {message.message}
         </div>
      )

   render () {
      return (
         <div>
            {this.displayMessage()}
         </div>
      );
   }
}

export default DisplayMessages;
