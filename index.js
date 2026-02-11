const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
console.log('Server is running on port 3000');
});
io.on('connection', (socket) => {
  socket.on('chat message', (data) => {
    io.emit('chat message', data);
  });
});