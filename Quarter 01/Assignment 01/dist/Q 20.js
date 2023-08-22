/*
------Question 20 :----------
Think of something you could store in a array.
For example, you could make a list of mountains, rivers, countries, cities, languages,
or anything else you’d like. Write a program that creates a list containing these items.
*/
let cities = ["Lahore", "Karachi", "Islamabad", "Quetta"];
let mountains = ["Rakaposhi", "K2", "Nanga Parbat", "Lady Finger"];
let countries = ["Pakistan", "India", "China", "Afghanistan", "Iran"];
let languages = ["Urdu", "Pashto", "Punjabi", "English"];
let rivers = ["Ravi", "Neelum", "Chanab", "Satluj", "Kunhar"];
//math.floor round of to lower or equal integer 
//math,round rounds of to lower,equal or above integer
console.log((cities.slice(Math.floor(Math.random() * cities.length))).concat((mountains.slice(Math.floor(Math.random() * mountains.length)))).concat((countries.slice(Math.floor(Math.random() * countries.length)))).concat((languages.slice(Math.floor(Math.random() * languages.length)))).concat((rivers.slice(Math.floor(Math.random() * rivers.length)))));
export {};
