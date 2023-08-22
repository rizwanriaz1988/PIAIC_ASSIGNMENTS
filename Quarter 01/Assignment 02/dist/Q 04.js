/*
------Question 04 :----------
Write a program that checks if a given number is even or odd.
*/
let input_num = prompt("Enter Integer:");
// parseInteger returns number without float
// parseFloat returns number with float
if (Number.isInteger(parseFloat(input_num))) {
    if (input_num % 2 == 0) {
        alert(`"${input_num}" is an Even Number`);
    }
    else {
        alert(`"${input_num}" is an Odd Number`);
    }
}
else {
    alert("Please Enter a Valid Integer!!!");
}
export {};
