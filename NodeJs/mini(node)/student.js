// student.js
const students = [];

function addStudent(name, marks) {
  students.push({ name, marks });
}

function getAllStudents() {
  return students;
}

module.exports = {
  addStudent,
  getAllStudents
};
