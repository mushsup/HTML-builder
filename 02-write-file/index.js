const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const fileStream = fs.createWriteStream(__dirname + '/output.txt', { flags: 'a' });

console.log('Hello! Enter text to write into text file. Type "exit" or Ctrl+C to exit');

const exitHandler = () => {
  console.log('bye');
  rl.close();
  fileStream.end();
};

rl.on('line', (input) => {
  if (input === 'exit') {
    exitHandler();
  } else {
    fileStream.write(input + '\n');
  }
});

process.on('SIGINT', exitHandler);