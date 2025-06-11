// nested-callbacks.js
function first(callback) {
  setTimeout(() => {
    console.log("First");
    callback();
  }, 1000);
}

function second(callback) {
  setTimeout(() => {
    console.log("Second");
    callback();
  }, 1000);
}

function third() {
  setTimeout(() => {
    console.log("Third");
  }, 1000);
}

first(() => {
  second(() => {
      third();
});
});
