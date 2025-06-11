const errorPromise = new Promise((resolve, reject) => {
  reject("❌ Something went wrong!");
});

errorPromise.catch((error) => {
  console.log("⚠️ Catch block:", error);
});
