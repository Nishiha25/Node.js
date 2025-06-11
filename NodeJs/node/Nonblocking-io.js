const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  console.log('File read complete');
});

console.log('This runs while the file is being read!');
