const net = require('net');

const server = net.createServer((connection) => {
  connection.end(getDate() + '\n');
});

server.listen(process.argv[2]);

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (parseInt(date.getMonth()) + 1)).slice(-2);
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
