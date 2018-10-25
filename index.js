
const server = require('./server');
const serialConnection = require('./src/models/serialConnection');

serialConnection.initSerialConnection();

server.listen(3000);
console.log("Initiated Server on 127.0.0.1:3000");