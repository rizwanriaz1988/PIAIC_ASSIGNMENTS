/*
------Question 16 :----------
More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
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
export {};
