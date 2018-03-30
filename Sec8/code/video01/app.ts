import * as http from 'http';

http.createServer((request, response) => {
  response.end('Hello from Node.js TypeScript');
}).listen(3000);