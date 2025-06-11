const fs = require('fs');
const EventEmitter = require('events');

// Create an event emitter instance
const emitter = new EventEmitter();

// Register an event listener
emitter.on('data_received', (content) => {
  console.log('Custom Event Triggered: Data Received!');
  console.log('File Content:', content);
});

// Simulate non-blocking file read
fs.readFile('demo.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  // Emit custom event after file read
  emitter.emit('data_received', data);
});

console.log('Node.js is non-blocking, so this runs while reading the file...');
