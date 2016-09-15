const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.end('Incorrect request method');
  }
  splitURL(req.url, '?', (errorOne, responseOne) => {
    if (errorOne) {
      res.end(errorOne);
    } else {
      splitURL(responseOne[0], '/', (errorTwo, responseTwo) => {
        if (errorTwo) {
          res.end(errorTwo);
        } else {
          parseURL(
            responseTwo[2],
            responseOne[1],
            (errorThree, responseThree) => {
            if (errorThree) {
              res.end(errorThree);
            } else {
              res.writeHead(200, {
                'Content-Type': 'application/json'
              });
              res.end(JSON.stringify(responseThree));
            }
          });
        }
      });
    }
  });
});

server.listen(process.argv[2]);

function splitURL(url, delimiter, callback) {
  try {
    const splitURL = url.split(delimiter);
    callback(null, splitURL);
  } catch (e) {
    callback('Incorrect endpoint');
  }
}

function parseURL(url, dataToParse, callback) {
  const isoDate = dataToParse.split('=')[1];
  var date = new Date(isoDate);
  if (url === 'parsetime') {
    const dateObject = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    callback(null, dateObject);
  }
  if (url === 'unixtime') {
    const dateObject = {
      unixtime: date.getTime()
    };
    callback(null, dateObject);
  }
  callback('Incorrect endpoint');
}
