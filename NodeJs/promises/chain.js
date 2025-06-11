const chainedPromise = new Promise((resolve, reject) => {
  resolve(5);
});

chainedPromise
  .then((num) => {
    console.log("✅ First then:", num);
    return num * 2;
  })
  .then((result) => {
    console.log("✅ Second then:", result);
    return result + 3;
  })
  .then((final) => {
    console.log("✅ Final result:", final);
  })
  .catch((error) => {
    console.log("⚠️ Catch block:", error);
  });
