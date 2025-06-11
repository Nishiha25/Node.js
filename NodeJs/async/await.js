function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("📦 Data received");
    }, 1000);
  });
}

async function displayData() {
  console.log("Fetching...");
  const result = await fetchData(); // waits here
  console.log(result);
}

displayData();
