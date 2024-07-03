// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 50;
const ageMark = 50;

// Deklaration
let isJohnOlder, isJohnEqual;
// let isMarkOlder

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
// isMarkOlder = (ageMark > ageJohn);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);

console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(true)
// if(false)
// if(isJohnOlder)
// if(ageJohn > ageMark)

//     {
//         console.log("John ist älter.");
                                   
//     }

// if(ageJohn == ageMark)

//     {
//         console.log("John und Mark sind gleich alt.");
                                       
//     }

// if(ageJohn < ageMark)

//     {
//         console.log("Mark ist älter.");
                                       
//     }
    

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein


// if (isJohnEqual) {
//     console.log("John und Mark sind gleich alt.");
//     } else if (isJohnOlder) 
//          {console.log("John ist älter.");
//                                          } else {  console.log("Mark ist älter."); }

    
/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


