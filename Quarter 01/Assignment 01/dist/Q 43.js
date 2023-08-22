/*
------Question 43 :----------
Unchanged Magicians: Start with your work from Exercise 41.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of
the original names and one array with the Great added to each magician’s name.
*/
// import { make_great } from "./Q 42"
// import { show_magicians } from "./Q 41"
let magicians = ["matty", "samknu", "lojer", "Hmaina"];
let copy_magicians = magicians.slice();
//-----1st task-----
let magician_greatArray = [];
//function to make great array
function make_great(x) {
    for (let i = 0; i < x.length; i++) {
        magician_greatArray.push(`The Great Magician "${x[i]}"`);
    }
}
//function call to make great array
make_great(copy_magicians);
//-----2nd task-----
function show_magicians(x) {
    for (let i = 0; i < x.length; i++) {
        console.log(`${x[i]}`);
    }
}
show_magicians(copy_magicians);
show_magicians(magician_greatArray);
export {};
