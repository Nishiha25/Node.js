function delay() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data loaded after 1 sec");
    }, 1000);
  });
}

async function loadData() {
  console.log("Loading...");
  const result = await delay();
  console.log(result);
  console.log("Done");
}

loadData();
