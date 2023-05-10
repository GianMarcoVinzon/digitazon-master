/*
Ex 1

creare una funzione getStr che prende in ingresso un array di stringhe e restituisce il valore della stringa alla posizione 2

chiamare la funzione getStr con un array di 5 stringhe a piacere e stampare il valore prodotto.
Per chi riesce: stampare il valore prodotto in upper case
*/

const string = ['Suzuki','Ducati','Aprillia','Harley','Kawasaki'];

function getStr(arr){
    return arr[2].toUpperCase()
}

console.log(getStr(string))