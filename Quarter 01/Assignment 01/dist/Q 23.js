/*
------Question 23 :----------
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and
your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
// 1st test
let car = 'subaru';
console.log(typeof car == typeof 'honda' ? "I Predict True" : "I predict False"); // it is comparing type of values
console.log(car == 'honda'); // it is comparing just values
// 2nd test
let animal = 'subaru';
console.log(typeof animal == typeof 'subaru' ? "I Predict True" : "I predict False"); // it is comparing type of values
console.log(animal == 'honda'); // it is comparing just values
// 3rd test
let age = 43;
console.log(typeof age == typeof 30 ? "I Predict True" : "I predict False"); // it is comparing type of values
console.log(age == 41); // it is comparing just values
// 4th test
let year = 2023;
console.log(typeof year == typeof 2022 ? "I Predict True" : "I predict False"); // it is comparing type of values
console.log(year == 2323); // it is comparing just values
// 5th test
let num = [1, 2, 3];
let num2 = [4, 5, 6];
console.log(typeof num == typeof num2 ? "I Predict True" : "I predict False"); // it is comparing type of values
console.log(num.toString() == num2.toString()); // it is comparing just values
export {};
