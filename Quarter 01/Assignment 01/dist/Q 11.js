/*
------Question 11 :----------
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/
// ---------1st method----------- 
let names = ["imran", "ahmad", "rizwan", "qamar", "salman", "waseem", "bilal"];
names.map((each) => console.log(each));
// ---------2nd method----------- 
let names2 = ["imran", "ahmad", "rizwan", "qamar", "salman", "waseem", "bilal"];
for (let i = 0; i < names2.length; i++) {
    console.log(names2[i]);
}
export {};
