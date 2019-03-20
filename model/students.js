let id = 0
const students = [
  {
    name: 'Jonathan',
    id: id++
  },
  {
    name: 'Nic',
    id: id++
  }
]

function addStudent(name) {
  const newStudent = {
    name,
    id: id++
  }
  students.push(newStudent)
  return newStudent
}

function getStudents() {
  return students
}

module.exports = {
  addStudent,
  getStudents
}