/*
------Question 24 :---------- 
More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

// Tests for equality and inequality with strings
let str1 = "Hello buddy!"
let str2 = "Hello Everyone"
let str3 = "Hello buddy!"
// -----Equality Test-----
console.log("Equality Test str1==str2 :",str1==str2?"True":"False")
console.log("Equality Test str1==str3 :",str1==str3?"True":"False")
console.log("Equality Test str3==str2 :",str3==str2?"True":"False")
// -----InEquality Test-----
console.log("InEquality Test str1!=str2 :",str1!=str2?"True":"False")
console.log("InEquality Test str1!=str3 :",str1!=str3?"True":"False")
console.log("InEquality Test str3!=str2 :",str3!=str2?"True":"False")


// Tests using the lower case function
let msg = "I am Pakistani"
let msgLower = msg.toLowerCase()
console.log(msg==msgLower?"Message is in lowercase":"Message is not in lowercase")


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
let n1 = 5;
let n2 = 9;
console.log("Equality:",n1==n2?"True":"False")
console.log("Inequality:",n1!=n2?"True":"False")
console.log("Less than or equal to:",n1<=n2?"True":"False")
console.log("Greater than or equal to:",n1>=n2?"True":"False")
console.log("Greater than:",n1>n2?"True":"False")
console.log("Less than:",n1<n2?"True":"False")
console.log("Equal value and type:",n1===n2?"True":"False")

// Tests using "and" and "or" operators
let x = 26;
console.log(x>10 && x>20)
console.log(x>10 || x<20)

// Test whether an item is in a array
// Test whether an item is not in a array

let array = [5,6,8,9,7]
let find = 52

if (array.indexOf(find)>=0){
    console.log("Number found")
}else{
    console.log("Number not found")
}