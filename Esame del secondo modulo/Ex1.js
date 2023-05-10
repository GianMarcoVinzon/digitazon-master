// 1 - Trova chi spende piu’ e chi spende meno
// Vi viene fornita una stringa che rappresenta le spese di ogni reparto della vostra societa’, la
// richiesta e’ che troviate il nome del reparto che spende di più e quello che spende meno,
// con i relativi importi totali.
// Segue un esempio di questa stringa:

// Dovete scrivere quindi una funzione che data in ingresso una stringa simile a quella data sia
// in grado di sommare tutti gli importi e ritornare quanto richiesto, cio’ che puo’ cambiare sono
// i nomi e il numero dei reparti e gli importi, la struttura rimarra’ la stessa.
// In questo esempio andrebbe ritornato un risultato di questo tipo:


const s1 = [ 500,40,60 ];
const s2 = [ 1000,1,200 ];
const s3 = [ 0 ]

let largest1 = s1[0];
let largest2 = s2[0];
let largest3 = s3[0];

let smallest1 = s1[0];
let smallest2 = s2[0];
let smallest3 = s3[0];

for (let i = 1; i < s1,s2,s3.length; i++) {

  if (s1[i] > largest1 ) {
    largest1 = s1[i];
  } else if (s1[i] < smallest1) {
    smallest1 = s1[i];
  }


}
console.log(largest1);
console.log(smallest1);
