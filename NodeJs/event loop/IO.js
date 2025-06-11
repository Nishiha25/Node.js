console.log("Start");

setTimeout(() => {
  console.log("Timer callback executed after 2 seconds");
}, 2000);

const fs = require('fs');
fs.readFile('event loop/io.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("File read error:", err);
  } else {
    console.log("File content:", data);
  }
});

console.log("End");
