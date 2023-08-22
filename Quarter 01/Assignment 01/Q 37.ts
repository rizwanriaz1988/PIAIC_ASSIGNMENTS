/*
------Question 37 :---------- 
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.
*/

//function
function make_shirt(text:string,size:string="Large"){
    console.log(`Size of your shirt is "${size}" with text "${text}".`)
}
//function call
make_shirt("I love TypeScript")
//function for large shirt with default message
make_shirt("I love TypeScript","Large")
//function for medium shirt with default message
make_shirt("I love TypeScript","Medium")
//shirt of any size with a different message
make_shirt("I Love Pakistan", "Extra Large")



export{}