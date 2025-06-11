console.log("Start");

Promise.resolve().then(() => {
  console.log("Microtask 1");
});

console.log("End");



console.log("Start")

Promise.resolve().then