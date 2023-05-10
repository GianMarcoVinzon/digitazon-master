// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve stampare una scacchiera di lato l
// contenente '#' e ' ', opportunamente alternati

// per stampare una riga:
//ricevo in ingresso x, che e' la lunghezza della riga 
//inizio con il cancelletto

function row(l, lastcanc){
    let = riga = ' '
    for (let i = 0; i < l; i++){
        if (lastcanc){
            riga += 'o'
        } else{
            riga += '#'
        }
        lastcanc = !lastcanc
    }
    return riga
}
function chessboard(l){
    let lastcanc = false 
    for (let i = 0; 1 < l; i++) {
        console.log (row(l, lastcanc))
    lastcanc = !lastcanc
    }
}

console.log ()
console.log(chessboard(5))