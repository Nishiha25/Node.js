const p1 = new Promise((resolve) => setTimeout(() => resolve("P1 done"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("P2 done"), 2000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("P3 done"), 1500));

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("✅ All Promises Resolved:", results);
  })
  .catch((error) => {
    console.log("❌ One promise failed:", error);
  });
