console.log("1: Start");

setTimeout(() => {
  console.log(": setTimeout"); // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("4: Promise resolved"); // Microtask
});

async function asyncFunc() {
  console.log("2: Inside asyncFunc");
  await null; // Awaited value creates a microtask
  console.log("5: After await");
}

asyncFunc();

console.log("3: End");
