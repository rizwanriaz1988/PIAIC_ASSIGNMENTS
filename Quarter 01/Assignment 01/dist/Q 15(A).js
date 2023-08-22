/*
------Question 15 :----------
Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program
stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the
new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
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
export {};
