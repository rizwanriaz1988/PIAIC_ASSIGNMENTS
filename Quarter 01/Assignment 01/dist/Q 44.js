/*
------Question 44 :----------
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time.
*/
let sandwich_items = ["cheese", "onion", "chicken", "katchup", "salad"];
function sandwich_summary(item) {
    console.log(`Thanks for your purchase.
    Your sandwich will include "${item}"`);
}
sandwich_summary(sandwich_items);
sandwich_summary(["onion", "salad"]);
sandwich_summary(["onion", "katchup", "cheese"]);
export {};
