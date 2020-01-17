const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port: 8080});

let clients = [];

wss.on('connection', (connection) => {
   clients.push(connection);

   connection.on('message', (message) => {
      console.log(message);
   })
})
