const http = require('http');
const app = require('../index');

function normalizePort(port) {
    const listenPort = parseInt(port, 10);

    // if (isNaN(listenPort)) {
    //     return port;
    // }

    if (port >= 0) {
        return listenPort;
    }

    return false;
}
const port = normalizePort(process.env.PORT || '5000');
console.log(port);
const server = http.createServer(app.callback());

server.listen(port);
