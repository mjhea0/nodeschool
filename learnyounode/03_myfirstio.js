const fs = require('fs');
// read file, converting buffer to string
const file = fs.readFileSync(process.argv[2], 'utf8');
console.log(file.split('\n').length - 1);
