// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
// const ageJohn = 50;
// const ageMark = 50;

// // Deklaration
// let isJohnOlder, isJohnEqual;
// // let isMarkOlder

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);
// isMarkOlder = (ageMark > ageJohn);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

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
// entweder ja oder nein (+ gleich alt)


// if (isJohnEqual) {
//     console.log("John und Mark sind gleich alt.");
//     } else if (isJohnOlder) 
//          {console.log("John ist älter.");
//                                          } else {  console.log("Mark ist älter."); }    // das ist meine Lösung... ist auch richtig!!!

    
/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";  // .. fährt TAXI! / UBER
job = "diver"; // .. taucht im Rhein! 
job = "artist"; // .. malt ein Bild!
job = "pilot"; // .. macht etwas anderes! --> default
job = "teacher"; // .. unterrichtet!
job = "instructor"; // .. unterrichtet!


switch (job) 
{
    case "driver": // job == "driver"
    console.log(firstName + " fährt TAXI!")
    break; // "break" trennt die Test's unter einander sonst werden mehrere ergebnise angezeitg!!
            case "diver": 
            console.log(firstName + " taucht im Rhein!")
            break;
                    case "artist": 
                    console.log(firstName + " malt ein Bild!")
                    break;
                            case "teacher": 
                            case  "instructor":
                            console.log(firstName + " unterrichtet!")
                            break;
                                    // case "instructor":  // das gleiche wie zwei case´s unter einander mit gleichem ergebnis!!! sie eine oben
                                    // console.log(firstName + " unterrichtet!")
                                    // break;

    default: // Wichtig!!
            console.log(firstName + " macht etwas anderes!")

        break;
}

