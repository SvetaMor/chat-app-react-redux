import React, { Component, Fragment } from 'react';
import DisplayMessages from './DisplayMessages/DisplayMessages';
import AddingMessage from './AddingMessage/AddingMessage';

class DialogsContainer extends Component
{
   constructor(props) {
      super(props);
      this.state = {
         messages: []
      }
   }

   connection = new WebSocket('ws://localhost:8080/');

   getMessage = (message) => {
      //this.setState({messages: [...this.state.messages], messages});
      const data = {username: this.props.username, message: message};
      this.connection.send(JSON.stringify(data));
   }

   render() {
      return (
         <Fragment>
            <DisplayMessages />
            <AddingMessage getMessage={this.getMessage}/>
         </Fragment>
      );
   }
}

export default DialogsContainer;
