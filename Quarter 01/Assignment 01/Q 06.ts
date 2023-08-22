/*
------Question 06 :---------- 
Stripping Names: Store a person’s name, and include some whitespace characters 
at the beginning and end of the name. Make sure 
you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around the name is displayed. 
Then print the name after striping the white spaces.
*/

let name:string = "   \n\tRizwan \n\tRiaz\n   "

// Befor Triming
console.log(`Before Triming:\n${name}`)

// After Triming
console.log(`After Triming:\n ${name.trim().replace(/\n/g,"").replace(/\t/g,"")}`)


export{}