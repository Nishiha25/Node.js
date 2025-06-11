const fs = require('fs');

// Write to a file
fs.writeFile('read.txt', 'Hello Neha!', err => {
  if (err) throw err;
  console.log('File written!');
});

// Read from a file
fs.readFile('read.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Read content:', data);
});
