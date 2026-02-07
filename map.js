/*
const numbers = [4, 8, 2, 3, 5];
const doubled = [];
for (const num of numbers) {
  const result = num * 2;
  doubled.push(result);
}
console.log(doubled);
*/

/*
const numbers = [4, 8, 2, 3, 5];
const doubled = numbers.map((x) => x * 2);
const fiveTimes = numbers.map((num) => num * 5);
const squared = numbers.map((num) => num * num);
console.log(doubled);
console.log(fiveTimes);
console.log(squared);
*/

const friends = ["zaved", "pavel", "nobel", "kodbel"];
const nameLengths = friends.map((name) => name.length);
const firstLetters = friends.map((name) => name[0]);
console.log(firstLetters);
console.log(nameLengths);
