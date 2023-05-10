console.log ('ciao');
// scrivere una funzione che prende in ngresso unna stringa e ritorna il numero di occorenza di ogni singolo carattere della stringa 

//creo una stringa uqalsiasi
// creo una funzione prende una stringa 
// creo una mappa 
// creo un ciclo della lunghezza della stringa
// nel ciclo creo un if (se string [i] == se la mappa ha quella chiave)
// se si incremento di uno il valore della chiave che viene trovata
// altrimenti metto 1
// la funzione dovrebbe restituire la mappa 

console.log(count('abaco'));

function count (stringa){
    const mappa = new Map ();
    for (let i = 0 ; i  < stringa.length; i++){
        if (mappa.has(stringa[i])){
            mappa.set(stringa[i], mappa.get(stringa[i]+1))
        } else
        mappa.set(stringa[i], 1)
         }
         return mappa
    }

    