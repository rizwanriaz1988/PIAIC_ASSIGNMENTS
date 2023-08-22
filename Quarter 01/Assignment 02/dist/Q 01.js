/*
------Question 01 :----------
Write a program that calculates the area of a rectangle.
*/
let height_rectangle = prompt("Enter Height:");
let width_rectangle = prompt("Enter Width:");
if ((Number.isInteger(parseInt(height_rectangle))) && (Number.isInteger(parseInt(width_rectangle)))) {
    let area = height_rectangle * width_rectangle;
    alert(`Area of Rectangle is: ${area}`);
}
else {
    alert("Please Enter a Valid Number!!!");
}
export {};
