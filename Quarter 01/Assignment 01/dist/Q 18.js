/*
------Question 18 :----------
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order
has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show
that its order has changed.
*/
let originalPlaces = ["Dubai", "Saudi Arabia", "Finland", "London", "Australia"];
let places = originalPlaces.slice();
//original array
console.log("Original Array:", places);
//array in alphabetical order
let sortedArray = places.slice().sort();
console.log("Sorted Array:", sortedArray);
//original array order after sorting
if (places.toString() === originalPlaces.toString()) { //array elements behave like an object in JS, so cant compare directly with === , and have to convert to string
    console.log("Array is in its original order:", places);
}
else {
    console.log("Array is not in its original order:", places);
}
//array in reverse alphabetical order
let reversedArray = sortedArray.slice().reverse();
console.log("Reversed Array:", reversedArray);
//original array order after sorting
if (places.toString() === originalPlaces.toString()) { //array elements behave like an object in JS, so cant compare directly with === , and have to convert to string
    console.log("Array is in its original order:", places);
}
else {
    console.log("Array is not in its original order:", places);
}
//original array converted to reversed array
let originalReversed = places.reverse();
if (places.toString() === originalPlaces.toString()) { //array elements behave like an object in JS, so cant compare directly with === , and have to convert to string
    console.log("Array is in its original order:", places);
}
else {
    console.log("Array is not in its original order:", places);
}
//originalReversed array converted to original again
let backToOriginal = places.reverse();
if (places.toString() === originalPlaces.toString()) { //array elements behave like an object in JS, so cant compare directly with === , and have to convert to string
    console.log("Array is in its original order:", places);
}
else {
    console.log("Array is not in its original order:", places);
}
//sort the original array
let sortedOriginal = places.sort();
if (places.toString() === originalPlaces.toString()) { //array elements behave like an object in JS, so cant compare directly with === , and have to convert to string
    console.log("Array is in its original order:", places);
}
else {
    console.log("Array is not in its original order:", places);
}
// sorted original array in reverse
let sortedOriginalReversed = places.reverse();
if (places.toString() === originalPlaces.toString()) { //array elements behave like an object in JS, so cant compare directly with === , and have to convert to string
    console.log("Array is in its original order:", places);
}
else {
    console.log("Array is not in its original order:", places);
}
export {};
