const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.end('Send a POST request');
  }
  req.on('data', function(chunk) {
    res.write(chunk.toString().toUpperCase());
  });
  req.on('end', function() {
    res.end();
  });
});

server.listen(process.argv[2]);
