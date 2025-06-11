let count = 0;
const interval = setInterval(() => {
  count++;
  console.log("Repeated task:", count);

  if (count === 7) clearInterval(interval);
}, 1000);
