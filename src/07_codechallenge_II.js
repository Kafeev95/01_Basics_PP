/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6  AND = &&
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// Meine lösung

const prompt = require('prompt-sync')({sigint: true});

let firstName = prompt("Vorname?: ");
let alter = parseInt(prompt("Alter?: "));
console.log(firstName + " ist " + alter +" Jahre alt!");

let milch, saft, cola, adult;

milch = 0<= alter && alter <=5;
saft = 6<= alter && alter <=12;
cola = 13<= alter && alter <=17;
adult = 18<= alter;
//const cond = true;

switch (true) {
        case milch:
        console.log(firstName + " darf Milch trinken.");
        break;
                case saft:
                console.log(firstName + " darf Milch und Saft trinken.");
                break;
                        case cola:
                        console.log(firstName + " darf Milch, Saft und Cola trinken.");
                        break;
                            	case adult:
                                console.log(firstName + " ist Erwachsen und darf alles trinken, was trinkbar ist.");
                                break;
                                        default:
                                        console.log(" Bitte richtigen Namen und Alter eingeben");
                                        break;
}


// Duzenten Löung

// const prompt = require('prompt-sync')({sigint: true});

// const firstName = prompt("Bitte Namen eingeben: ");
// const age =  parseInt(prompt("Bitte Alter eingeben: ")); // "2" --> 2

// switch (true) {
//     case (age >= 0) && (age <= 5) :
//         console.log(firstName + " trinkt Milch.");
//         break;
//     case (age >= 6) && (age <= 12):
//         console.log(firstName + " trinkt Saft.");
//         break;
//     case (age >= 13) && (age <= 17):
//         console.log(firstName + " trinkt Cola.");
//         break;
//     case (age >= 18) && (age <= 130):
//         console.log(firstName + " trinkt Wein.");
//         break;   
//     default:
//         console.log("Bitte Tee trinken!");   
//         break;
// }
