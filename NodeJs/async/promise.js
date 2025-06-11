function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function greet() {
  console.log("Hello...");
  await wait(2000); // waits for 2 seconds
  console.log("...after 2 seconds!");
}

greet();
