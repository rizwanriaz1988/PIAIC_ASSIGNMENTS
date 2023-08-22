/*
------Question 13 :----------
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples.
Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”

*/
// ---------1st method----------- 
let car = ["Honda", "Toyota", "Suzuki", "KIA"];
car.map((each) => console.log(`I would like to own a ${each} car. `));
// ---------2nd method----------- 
let car2 = ["Honda", "Toyota", "Suzuki", "KIA"];
for (let i = 0; i < car2.length; i++) {
    console.log(`I would like to own a ${car2[i]} car.`);
}
export {};
