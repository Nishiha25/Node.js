function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded!");
  }, 2000);
}

console.log("Start fetching...");
fetchData((result) => {
  console.log(result);
});
console.log("Request sent!");
