import React, { Component, Fragment } from 'react';
import DisplayMessages from './DisplayMessages/DisplayMessages';
import AddingMessage from './AddingMessage/AddingMessage';

class DialogsContainer extends Component
{
   render() {
      return (
         <Fragment>
            <DisplayMessages />
            <AddingMessage />
         </Fragment>
      );
   }
}

export default DialogsContainer;
