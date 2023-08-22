/*
------Question 03 :---------- 
Write a program that checks if a given number is positive, negative, or zero.
*/

let number_input:any = prompt("Enter Number:")
// parseInteger returns number without float
// parseFloat returns number with float
if (Number.isInteger(parseInt(number_input))){
    if((parseFloat(number_input)) > 0){
        alert(`Number Status: "Positive"`)
    }else if ((parseFloat(number_input)) == 0){
        alert(`Number Status: "Zero"`)
    }else if ((parseFloat(number_input)) < 0){
        alert(`Number Status: "Negative"`)
    }
}else{
    alert("Please Enter a Valid Number!!!")
}

