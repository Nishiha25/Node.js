const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

promise
  .then(result => console.log(result))   // If fulfilled
  .catch(error => console.log(error));   // If rejected
