/*
------Question 05 :---------- 
Write a program that determines if a person is eligible to vote based on their age.
*/

let input_age:any = prompt("Enter Your Age:")

if (Number.isInteger(parseInt(input_age))){
    if(input_age >= 16){
        alert(`congratulations!!\nYour are eligible to vote.`)
    }else{
        alert(`oops!!\nYour are not eligible to vote.`)
    }
}else{
    alert("Please Enter a Valid Number !!!")
}

