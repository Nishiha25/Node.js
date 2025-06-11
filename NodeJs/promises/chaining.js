function asyncTask(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 1);
    }, 500);
  });
}

asyncTask(1)
  .then(result => {
    console.log(result); // 2
    return asyncTask(result);
  })
  .then(result => {
    console.log(result); // 3
    return asyncTask(result);
  })
  .then(result => console.log(result)); // 4
