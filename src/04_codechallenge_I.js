
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let zahl1 = prompt("1. Zahl: "); // prompt = eingabe feld im terminal
let zahl2 = prompt("2. Zahl: ");
let summe = parseFloat(zahl1) + parseFloat(zahl2) //  "parsFloat" definiert String als number, Daten typ ist wichtig!!
console.log("Die Summe der Zahlen ist: " + summe);
