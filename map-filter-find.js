const students = [
  { id: 1, name: "abdul", marks: 50 },
  { id: 2, name: "Ifad", marks: 85 },
  { id: 3, name: "Bablu", marks: 95 },
  { id: 4, name: "Kuddus", marks: 15 },
];

const marks = students.map((student) => student.marks * 0.75);
console.log(marks);

const goodStudents = students.filter((student) => student.marks > 80);
console.log(goodStudents);

const goodStudent = students.find((student) => student.marks > 80);
console.log(goodStudent);
