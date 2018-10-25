const http = require('http');
const router = require('./router');
const server = http.createServer();

server.on('request', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    response.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    router(request, response);
});

module.exports = server;