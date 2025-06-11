const fast = new Promise((resolve) => setTimeout(() => resolve("Fastest!"), 1000));
const slow = new Promise((resolve) => setTimeout(() => resolve("Too slow..."), 3000));

Promise.race([fast, slow])
  .then((winner) => {
    console.log("🏁 First Resolved:", winner);
  })
  .catch((error) => {
    console.log("❌ First Rejected:", error);
  });
