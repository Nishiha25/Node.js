const promise = new Promise((resolve, reject) => {
  resolve("🎉 Promise resolved successfully!");
});

promise.then((message) => {
  console.log("✅ Then block:", message);
});
