/*
------Question 15 :----------
Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.

*/
//persons 
let invitedPersons = ["Imran", "Ahmad", "Emaad", "Rehan"];
let refusedPersons = ["Imran"];
let newPersons = ["Rizwan"];
//host and timing
let host = "Rizwan Riaz";
let date = "19-08-2023";
let time = "09:00 PM";
//remaining persons after refusal
let remainingPersons = invitedPersons.filter(person);
function person(per) {
    if (refusedPersons.includes(per)) {
        return false;
    }
    else {
        return true;
    }
}
// final list after adding new persons
let finalPersons = remainingPersons.concat(newPersons);
//invitation message
finalPersons.map((p) => console.log(`
Dear ${p},

I hope this letter finds you well.

I am writing to invite you to dinner at my home on ${date} at ${time}.
I know you have been working hard lately, so I thought this would be a nice opportunity for us
to relax and catch up.

Please let me know if you are able to make it by ${date}. I look forward to hearing from you.

Sincerely,
${host}\n
----------------------------------------------------------------------------------------------
`));
export {};
