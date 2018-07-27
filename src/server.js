const port = 9090;
const WebSocketServer = require('ws').Server,
	server = new WebSocketServer({ port }),
	sh = require('./server_helper.js'),
	connections = { all: [] };

console.log(`Server is running on port: ${port}`);

sh.initConnections(connections);

server.on('connection', socket => {
	connections.all.push(socket);

	socket.on('message', data => {
		sh.messageHandler(socket, JSON.parse(data));
	});

	socket.on('close', () => {
		sh.closeConnection(socket);
	});
});
