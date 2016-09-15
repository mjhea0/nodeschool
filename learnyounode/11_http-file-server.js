const http = require('http');
const fs = require('fs');

const filename = process.argv[3];

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream(process.argv[3]);
  readStream.on('open', () => {
    readStream.pipe(res);
  });
  readStream.on('error', (err) => {
    res.end(err);
  });
});

server.listen(process.argv[2]);
