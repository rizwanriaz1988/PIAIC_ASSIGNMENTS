/*
------Question 19 :----------
Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.
*/
//First Invitation Message
let persons = ["Imran", "Ahmad", "Emaad", "Junaid"];
let host = "Rizwan Riaz";
let date = "19-08-2023";
let time = "09:00 PM";
persons.map((each) => console.log(`
Dear ${each},

I hope this letter finds you well.

I am writing to invite you to dinner at my home on ${date} at ${time}.
I know you have been working hard lately, so I thought this would be a nice opportunity for us
to relax and catch up.

Please let me know if you are able to make it by ${date}. I look forward to hearing from you.

Sincerely,
${host}
----------------------------------------------------------------------------------------------
`));
// Refusal Message
let refusedPersons = persons.splice(0, 2, "Rizwan", "Amjad");
refusedPersons.map((refused) => console.log(`
"Message"
Due to some domestic issue ${refusedPersons} is unable to attend the dinner at my home on ${date}.
----------------------------------------------------------------------------------------------
`));
//Second Invitation Message
persons.map((each) => console.log(`
Dear ${each},

I hope this letter finds you well.

I am writing to invite you to dinner at my home on ${date} at ${time}.
I know you have been working hard lately, so I thought this would be a nice opportunity for us
to relax and catch up.

Please let me know if you are able to make it by ${date}. I look forward to hearing from you.

Sincerely,
${host}
----------------------------------------------------------------------------------------------
`));
//Bigger Table Message
persons.map((each) => console.log(`
Dear ${each},

I hope this letter finds you well.

It is to inform you that I have found a bigger dinner table.

Sincerely,
${host}
----------------------------------------------------------------------------------------------
`));
//addition of one new guest at start
persons.unshift("Akram");
//addition of one new guest at middle
let mid = Math.round((persons.length) / 2);
persons.splice(mid, 0, "Zeeshan");
//addition of one new guest at the end
persons.push("Rehmat");
//Third Invitation Message
persons.map((each) => console.log(`
Dear ${each},

I hope this letter finds you well.

I am writing to invite you to dinner at my home on ${date} at ${time}.
I know you have been working hard lately, so I thought this would be a nice opportunity for us
to relax and catch up.

Please let me know if you are able to make it by ${date}. I look forward to hearing from you.

Sincerely,
${host}
----------------------------------------------------------------------------------------------
`));
//sorry
console.log(`I am very sad to inform you that I can invite only two people for dinner.`);
//removal of guests from list till 2
let no = persons.length;
for (let i = 0; i < no - 2; i++) {
    let rejectedPerson = persons.pop();
    console.log(`
    Dear ${rejectedPerson},

    I hope this letter finds you well.
    
    I am very sad to inform you that I can invite only two people for dinner.
    
    Sincerely,
    ${host}
    ---------------------------------------------------------------
    `);
}
//Forth Invitation Message
persons.map((each) => console.log(`
Dear ${each},

I hope this letter finds you well.

I am writing to invite you to dinner at my home on ${date} at ${time}.
I know you have been working hard lately, so I thought this would be a nice opportunity for us
to relax and catch up.

Please let me know if you are able to make it by ${date}. I look forward to hearing from you.

Sincerely,
${host}
----------------------------------------------------------------------------------------------
`));
//removal of last two elements
let len = persons.length;
for (let k = 0; k < len; k++) {
    persons.pop();
}
//empty list
console.log("Empty list at last:", persons);
// no of people invited
console.log("Number of people invited for dinner is:", no);
export {};
