// var, let, const
const tax = 5000;
let eta = 5;
eta = 7;

// default parameter
function add(num1, num2 = 0) {}

// template string
const student = { name: "nayeem", marks: 50 };
const friends = ["abul", "babul", "cymon", "dulal"];
const dynamicText = `My tax: ${tax} and marks ${student.marks * 1.2} has friend: ${friends[1]}`;

const innerHtml = `
<div>
    <h1> Hello: ${friends.length} </h1>
    <p>Once upon a time there was a bird named sparrow</p>
</div>
`;

// Arrow function
const add2 = (num1, num2 = 0) => num1 + num2;
const tenTimes = (x) => x * 10;

// Spread Operator
const newFriends = [...friends, "polash", "saadi"];

// Destructuring
const { marks: totalMarks, age = 0 } = student;
console.log(totalMarks, age);

const [firstFriend] = friends;
console.log(firstFriend);
