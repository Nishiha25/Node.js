function task1() {
  return new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000));
}

function task2() {
  return new Promise((resolve) => setTimeout(() => resolve("Task 2"), 2000));
}

async function runTasks() {
  const result1 = await task1();
  const result2 = await task2();
  console.log(result1, result2); // Task 1 Task 2
}

runTasks();
