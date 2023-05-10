console.log('ARRAY');
    
let array=[1,3,4,5,5]

function iterazione(valore,indice){
    console.log('questo è il valore numero '+ indice +' = '+ valore);
}
array.forEach(iterazione)

console.log('MAP');

let map = new Map()
map.set('key1','ciccio')
map.set('key2','pasticcio')
map.set('key3','ciao')

map.forEach(iterazione)




console.log('SET');

let set1=new Set()
set1.add('valorex')
set1.add('valorey')
set1.add('valorep')
//    set1.add('valorex') questo non me lo inserisce perchè è duplicato

set1.forEach(iterazione)