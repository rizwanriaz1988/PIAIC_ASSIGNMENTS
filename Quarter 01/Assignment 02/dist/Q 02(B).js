/*
------Question 02 :----------
Write a program that takes input and calculates the volume of a cube.
*/
/*
--------------1st Method------------
import * as readline from 'readline'
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

let height_cube:any;
let width_cube:any
let length_cube:any
rl.question("Enter Height:",(height_in)=>{console.log(height_in)
rl.close()
})
rl.question("Enter Width:",(width_in)=>width_in==width_cube)
rl.question("Enter Length:",(length_in)=>length_in==length_cube)

if ((Number.isInteger(parseInt(height_cube))) && (Number.isInteger(parseInt(width_cube))) && (Number.isInteger(parseInt(length_cube)))) {
    let volume = height_cube * width_cube * length_cube;
    console.log(`Volume of Cube is: ${volume}`);
}
else {
    console.log("Please Enter a Valid Number!!!");
}

rl.close() */
/* --------------2nd Method------------ */
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "length",
        type: "number",
        message: "Enter length of cube:"
    },
    {
        name: "width",
        type: "number",
        message: "Enter width of cube:"
    },
    {
        name: "height",
        type: "number",
        message: "Enter height of cube:"
    },
]);
let volume = answers.length * answers.width * answers.height;
console.log(`Cube Volume:${volume}`);
