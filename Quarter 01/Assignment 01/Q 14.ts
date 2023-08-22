/*
------Question 14 :---------- 
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.

*/

let persons:string[] = ["Imran","Ahmad","Emaad"]
let host:string = "Rizwan Riaz"
let date:string = "19-08-2023"
let time:string = "09:00 PM"

persons.map((each)=>
console.log(`
Dear ${each},

I hope this letter finds you well.

I am writing to invite you to dinner at my home on ${date} at ${time}.
I know you have been working hard lately, so I thought this would be a nice opportunity for us
to relax and catch up.

Please let me know if you are able to make it by ${date}. I look forward to hearing from you.

Sincerely,
${host}\n
----------------------------------------------------------------------------------------------
`)
)

export{}