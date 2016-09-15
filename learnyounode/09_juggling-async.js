const http = require('http');
const bl = require('bl');

const results = [];
const totalFiles = parseInt(process.argv.length - 2);
let count = 0;

for (var i = 0; i < totalFiles; i++) {
  getData(i);
}

function getData(index) {
  http.get(process.argv[2 + index], (response) => {
    response.pipe(bl((err, data) => {
      if (err) {
        return console.error(err);
      }
      results[index] = data.toString();
      count++;
      if (count === 3) {
        printResults();
      }
    }));
  });
}

function printResults() {
  results.forEach((results) => {
    console.log(results);
  });
}
