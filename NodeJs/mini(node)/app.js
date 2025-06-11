
// <----- without getting input from user ----->


const student = require('./student');
const grader = require('./gradeCalculator');

// Add sample students
student.addStudent('Alice', 92);
student.addStudent('Bob', 76);
student.addStudent('Charlie', 59);

// Display student grades
const allStudents = student.getAllStudents();
allStudents.forEach((s) => {
  const grade = grader.calculateGrade(s.marks);
  console.log(`${s.name} scored ${s.marks} and received grade ${grade}`);
});




//      <----- Getting input from user ----->



const readline = require('readline');
const student = require('./student');
const grader = require('./gradeCalculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter student name: ', (name) => {
  rl.question('Enter student marks: ', (marksInput) => {
    const marks = parseInt(marksInput);

    student.addStudent(name, marks);

    const grade = grader.calculateGrade(marks);
    console.log(`${name} scored ${marks} and received grade ${grade}`);

    rl.close();
  });
});
