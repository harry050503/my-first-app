const express = require('express');
const app = express();
const http = require('http');
// THIS IS THE MISSING LINE BELOW:
const server = http.createServer(app); 
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
io.on('connection', (socket) => {
  socket.on('chat message', (data) => {
    io.emit('chat message', data);
  });
});