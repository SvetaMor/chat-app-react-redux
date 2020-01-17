const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port: 8080});

let clients = [];

wss.on('connection', (connection) => {
   clients.push(connection);

   connection.on('message', (message) => {
      const data = JSON.parse(message);
      broadcast(data);
   })
})

broadcast = (message) => {
   const data = JSON.stringify(message);
   clients.forEach(client => client.send(data));
}
