/*
------Question 29 :----------
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
let favFruits = ["apple", "banana", "grapes", "mango"];
//check for mango
if (favFruits.includes("mango")) {
    console.log("Fruit found in the list");
}
else {
    console.log("Fruit not found in the list");
}
//check for watermelon
if (favFruits.includes("watermelon")) {
    console.log("Fruit found in the list");
}
else {
    console.log("Fruit not found in the list");
}
//check for peach
if (favFruits.includes("peach")) {
    console.log("Fruit found in the list");
}
else {
    console.log("Fruit not found in the list");
}
//three favorite fruits list
let favorite_fruits = ["banana", "grapes", "mango"];
//(1st) check for mango
let fruit = "mango";
if (favFruits.includes(fruit)) {
    console.log(`I really like ${fruit}`);
}
else {
    console.log(`I do not like ${fruit}`);
}
//(2nd) check for orange
let fruit2 = "orange";
if (favFruits.includes(fruit2)) {
    console.log(`I really like ${fruit2}`);
}
else {
    console.log(`I do not like ${fruit2}`);
}
//(3rd) check for grapes
let fruit3 = "grapes";
if (favFruits.includes(fruit3)) {
    console.log(`I really like ${fruit3}`);
}
else {
    console.log(`I do not like ${fruit3}`);
}
//(4th) check for banana
let fruit4 = "banana";
if (favFruits.includes(fruit4)) {
    console.log(`I really like ${fruit4}`);
}
else {
    console.log(`I do not like ${fruit4}`);
}
//(5th) check for peach
let fruit5 = "peach";
if (favFruits.includes(fruit5)) {
    console.log(`I really like ${fruit5}`);
}
else {
    console.log(`I do not like ${fruit5}`);
}
export {};
