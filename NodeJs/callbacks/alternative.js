function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

wait(1000)
  .then(() => {
    console.log("Step 1");
    return wait(1000);
  })
  .then(() => {
    console.log("Step 2");
    return wait(1000);
  })
  .then(() => {
    console.log("Step 3");
  });
