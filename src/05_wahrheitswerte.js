
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter Iteration 1
// let year = 2024;
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// Berechnung Alter Iteration 2
// let date = new Date();
// let year = date.getFullYear();
// console.log("Datum " + date);
// // console.log("Jahr " + date.getFullYear()); das gleiche wie das darunter da wir year schon bestimmt haben
// console.log("Jahr " + year);
// ageJohn = year - birthYearJohn;
// ageMark = year - birthYearMark;

// Berechnung Alter Iteration 2
let year = new Date().getFullYear(); // zusammfasung von 2.
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

// Deklaration
let isJohnOlder; // = Is John older? --> y/n (yes or no) --> true/false
isJohnOlder = (ageJohn > ageMark); // Test  auf Ungleichheit
let isJohnEqual = (ageJohn == ageMark);// Test auf Gleichheit "=="  vergleichs Variable "=" zuweisungs Varaible

console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);

