const fs = require('fs');
const path = require('path');

const myReadStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf8');

myReadStream.on('data', (chunk) => {
  console.log(chunk);
});

myReadStream.on('error', (err) => {
  console.error(err);
});