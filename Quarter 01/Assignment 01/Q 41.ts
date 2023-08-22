/*
------Question 41 :---------- 
Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

let magicians =["matty", "samknu","lojer"]

export function show_magicians(x:any){
    for (let i=0;i<x.length;i++){
        console.log(`${x[i]}`)
        }
}

show_magicians(magicians)