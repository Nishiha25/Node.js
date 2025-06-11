console.log("1️⃣ Start");

setTimeout(() => {
  console.log("4️⃣ Timeout"); // Macrotask
}, 1000);

async function run() {
  const result = await Promise.resolve("3️⃣ Awaited Promise");
  console.log(result); // Microtask
}

run();

console.log("2️⃣ End");
