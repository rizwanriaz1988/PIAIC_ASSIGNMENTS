/*
------Question 12 :---------- 
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same,
 but each message should be personalized with the person’s name.

*/

// ---------1st method----------- 

let names:string[]=["imran", "ahmad", "rizwan", "qamar", "salman", "waseem", "bilal"]
names.map((each)=>console.log(`Hi ${each}! How are you? `))

// ---------2nd method----------- 

let names2:string[]=["imran", "ahmad", "rizwan", "qamar", "salman", "waseem", "bilal"]
for (let i=0;i<names2.length;i++){
    console.log(`Hello ${names2[i]}, what's up? What are you doing?`)
}


export{}