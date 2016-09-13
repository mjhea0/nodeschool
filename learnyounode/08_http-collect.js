const http = require('http');

http.get(process.argv[2], (response) => {
  response.on('data', (data) => {
  });
  response.on('end', () => {

  });
});

// wip
