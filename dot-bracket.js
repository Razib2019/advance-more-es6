const student = {
  name: "Rafid",
  marks: 90,
  1: 50,
  "home-address": "kochu khet",
};

// Dot Notation
const studentName = student.name;
console.log(studentName);
// Bracket Notation
const studentName2 = student["name"];
console.log(studentName2);
const homeAdderss = student["home-address"];
console.log(homeAdderss);

for (const key in student) {
  const value = student[key];
  console.log(key, ":", value);
}

const propName = "marks";
console.log(student[propName]);
