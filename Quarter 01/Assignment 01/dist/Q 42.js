/*
------Question 42 :----------
Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians by
adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
let magicians = ["matty", "samknu", "lojer"];
export function make_great(x) {
    for (let i = 0; i < x.length; i++) {
        console.log(`The Great Magician "${x[i]}"`);
    }
}
make_great(magicians);
// export{}
