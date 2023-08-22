/*
------Question 17 :----------
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them
know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to
make sure you actually have an empty list at the end of your program.
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
export {};
