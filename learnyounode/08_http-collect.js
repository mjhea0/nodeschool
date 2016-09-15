const http = require('http');

let allData = "";

http.get(process.argv[2], (response) => {
  response.on('data', (data) => {
    allData = allData + data;
  });
  response.on('end', () => {
    console.log(allData.length);
    console.log(allData);
  });
});
