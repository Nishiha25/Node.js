function task1() {
  console.log("Task 1");
}

function task2() {
  setTimeout(() => {
    console.log("Task 2 (Async)");
  }, 1000);
}

function task3() {
  console.log("Task 3");
}

task1();
task2();
task3();
