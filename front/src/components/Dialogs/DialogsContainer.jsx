import React, { useState, useEffect, Fragment } from 'react';
import DisplayMessages from './DisplayMessages/DisplayMessages';
import AddingMessage from './AddingMessage/AddingMessage';

const DialogsContainer = (props) => {
   const [messages, setMessages] = useState([]);

   useEffect(() => {
      connection.onmessage = (message) => {
         const data = JSON.parse(message.data);
         setMessages([...messages, data]);
      }
   });

   return (
      <Fragment>
         <DisplayMessages messages={messages}/>
         <AddingMessage getMessage={getMessage} username={props.username}/>
      </Fragment>
   );
}

const connection = new WebSocket('ws://localhost:8080/');

const getMessage = (message, username) => {
   const data = {message: message, username: username}; debugger
   connection.send(JSON.stringify(data));
}

export default DialogsContainer;
