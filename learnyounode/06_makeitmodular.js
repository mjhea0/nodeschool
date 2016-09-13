const fs = require('fs');
const path = require('path');
const filtered = require('./06_mymodule');

const extension = '.' + process.argv[3];
const directory = process.argv[2];

filtered(directory, extension, (err, data) => {
  if(err) {
    console.log(err);
  } else {
    data.forEach((el) => {
      console.log(el);
    });
  }
});
