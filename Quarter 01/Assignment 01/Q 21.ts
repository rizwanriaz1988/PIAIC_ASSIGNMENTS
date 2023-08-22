/*
------Question 21 :---------- 
They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.
*/
let cities = ["Lahore", "Karachi", "Islamabad", "Quetta"]
let mountains = ["Rakaposhi", "K2", "Nanga Parbat", "Lady Finger"]
let countries = ["Pakistan", "India", "China", "Afghanistan","Iran"]
let languages = ["Urdu", "Pashto", "Punjabi", "English"]
let rivers = ["Ravi", "Neelum", "Chanab", "Satluj","Kunhar"]


let mix ={
    City:cities[Math.floor(Math.random()*cities.length)],
    Mountain:mountains[Math.floor(Math.random()*mountains.length)],
    Country:countries[Math.floor(Math.random()*countries.length)],
    Language:languages[Math.floor(Math.random()*languages.length)],
    River:rivers[Math.floor(Math.random()*rivers.length)]
}

console.log(mix)

export{}