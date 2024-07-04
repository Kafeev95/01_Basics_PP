
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
 
ausgabeNamen2("Peter"); // Argument --> Daten für Parameter
ausgabeNamen2("Max");

function ausgabeNamen2(firstName) // Parameter
{
    console.log("Haollo, " + firstName + "!");
    
}


