// promise-example.js

// Creating a new promise
const samplePromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("✅ Promise is fulfilled after 2 seconds!");
    } else {
      reject("❌ Promise is rejected.");
    }
  }, 2000); // Simulates async delay
});

console.log("🔄 Promise is in pending state...");

// Handling the promise
samplePromise
  .then((message) => {
    console.log("✔️ Then block: " + message);
  })
  .catch((error) => {
    console.log("⚠️ Catch block: " + error);
  });
