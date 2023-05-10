//QUIZ DEL GIRONO
//Write a function that determines if a characther is an hupper case letter.

//Assumption
// - function
// - fuction (x)
// - function(x) -> return YES or NO

//pseudo-code
// funzoine che prende in input un dato 
// la funzione verifica che sia uan lettera maiuscola
// la funzione restituisce il risultato

//// Domande da porsi:
//// - che cosa succede se do in input un numero?
//// - "a","b","=","!","#" - cosa succede se do in input un carattere speciale
//// - cosa succede se diamo in input una parola?
//// - cosa succede se diamo in input un booleano?
//// - cosa succede se diamo in input un undefined/null? porsi sempre questa domanda
//// - cosa succede se diamo in input una stringa vuota?
//// - cosa succede se diamo in input ogetto / array etc..?
//// - cosa succede se diamo in input



/// perche ho sbaglieto .....
/// non darti la colpa migliora
/// chiediti sempre perche
/// spezzare un grande problema in piccoli problemi

function isUpper(characther) {
    if (typeof characther !='string') return false;
    if (characther.length !=1)return false;
    let specialChar =['#','!'];
    const ascilVal = characther.charCodeAt(0)
    return ascilVal >= 65 && ascilVal <= 90;
}

isUpper('1')

// geek4geek
// Hackerrank
// Leetcode