/*
------Question 34 :---------- 
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of 
printing just the name of the pizza. For each pizza you should have one line of output containing a 
simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
The output should consist of three or more lines about the kinds of pizza you like and then an 
additional sentence, such as I really love pizza!
*/

let pizzaVariety = ["Hawaiian", "Pepperoni", "Margherita"]

for (let i=0;i<pizzaVariety.length;i++){
console.log(`I like ${pizzaVariety[i]} pizza`)
}

console.log(`
I really love pizza! My favorite kinds of pizza are:

Pepperoni pizza: This is a classic pizza with pepperoni, mozzarella cheese, and tomato sauce. It's always a crowd-pleaser.
Hawaiian pizza: This pizza has pineapple, ham, and mozzarella cheese. It's a bit of a controversial pizza, but I love the sweet and savory combination of flavors.
Margherita pizza: This pizza is made with fresh mozzarella cheese, basil, and tomato sauce. It's a simple pizza, but it's so delicious.
I really love pizza!
`)