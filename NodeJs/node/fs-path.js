const fs = require('fs');
const path = require('path');

// Read a file using fs
fs.readFile(path.join(__dirname, 'demo.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File contents:', data);
});
