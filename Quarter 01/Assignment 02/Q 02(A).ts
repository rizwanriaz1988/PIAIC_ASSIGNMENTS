/*
------Question 02 :---------- 
Write a program that takes input and calculates the volume of a cube.
*/

let height_cube:any = prompt("Enter Height:")
let width_cube:any = prompt("Enter Width:")
let length_cube:any = prompt("Enter Length:")

if ((Number.isInteger(parseInt(height_cube)))&&(Number.isInteger(parseInt(width_cube)))&&(Number.isInteger(parseInt(length_cube)))){
    let volume = height_cube * width_cube * length_cube
    alert(`Volume of Cube is: ${volume}`)
}else{
    alert("Please Enter a Valid Number!!!")
}

