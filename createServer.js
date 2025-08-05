const http = require('http');

http.createServer((request, response) => {
    response.write('Hello from Node JS');
    response.end()
}).listen(1000)