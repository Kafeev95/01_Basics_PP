
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsrupf / call
// test();

// Funktionsrupf / callee
// Funktionsdeklaration

function test() 
{
    console.log("Haollo, Marius!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//call
// ausgabeNamen();

// Funktion
function ausgabeNamen() 
{
    //  interne Variable / nur innerhalb der Funktion definiert!!!
    let firstName = "Mark"
    console.log("Haollo, " + firstName + "!");
    
}
// console.log(firstName); // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN
 
// ausgabeNamen2("Peter"); // Argument --> Daten für Parameter
// ausgabeNamen2("Max");

function ausgabeNamen2(firstName) // Parameter
{
    console.log("Haollo, " + firstName + "!");
    
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamenParams("Max ", "Muster");

// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamenParams(prompt("Vorname: "), prompt("Nachname: "));

function ausgabeNamenParams(firstName, familyName) 
{
    console.log("Haollo, " + firstName + familyName +  "!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenSRP("Max","Mütze");


function ausgabeNamenSRP(firstName, familyName) 
{
    // 1. Funktionalität: string composing
        const GAP = " "
        let outputStr = "Haollo,"+ GAP + firstName + GAP + familyName +  "!"

    // 2. Funktionalität: string output

    console.log(outputStr);
}


