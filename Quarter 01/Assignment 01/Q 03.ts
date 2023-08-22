/*
------Question 03 :---------- 
Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.

*/

//--------Title Case------------
// Code for Title Case i.e. First charachter of each word in Uppercase:
let input:string="my name is rizwan riaz";
//split used for strings => array
let input_split = input.toLowerCase().split(" ");
//map used for array => array
let title = input_split.map((each)=>each.charAt(0).toUpperCase()+each.slice(1).toLowerCase()) ;
// join array elements to string
let title_join = title.join(" ");
//print
console.log('Title Case = '+title_join)  



export{}