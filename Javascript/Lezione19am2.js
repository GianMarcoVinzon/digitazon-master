
// Creare un array di 5 parole.
// Iterare su questo array in 2 modi.
// PRIMA con un while, per stampare tutte le singole parole nell'array MAIUSCOLE. In questo caso, vogliamo ciclare l'array in senso invertito.

// DOPO con un foreach, per stampare tutte le parole dell'array in ordine
// 

//creo un array di 5 parole 
//eseguire due cicli:
// 1) ciclo while invertito; 
// 2) ciclo for in ordine.

// const ciclo = [ 'demonslayer','chainsawmen','aot','hunterxhunter','tokyoghoul' ] {

// let i = 0 ;
// while ( i >= 5 ) {
// console.log(i);
//     }
// i--
// }
// console.log (ciclo)

let a = ["ciao", "mario", "come", "stai", "?"]

let i = a.length -1;                //inizializzazione
console.log(i);
while(i >= 0){
    console.log(a[i].toUpperCase());
    i--
}

console.log("------------");

a.forEach(function(j){
    console.log(j);
})

