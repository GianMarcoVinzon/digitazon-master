const quadrato = { x: 5, y: 5, shape: 'square' }
const rettangolo = { x: 2, y: 6, shape: 'rectangle' }

console.log(quadrato)   

function parseShape(object){
    if(object.hasOwnProperty('x') && object.hasOwnProperty('y') && object.hasOwnProperty ('shape') && typeof object.x == 'number' && typeof object.y == 'number' && typeof object.shape == 'string'){
    let a = 0
    let p = 0
    if(object.shape == 'square'){
        a = object.x * object.x
        p = object.x * 4
    }
    else if(object.shape == 'rectangle'){
        a = object.x * object.y
        p = object.x * 2 + object.y * 2
    }
    return 'l\'area del ' + object.shape + ' è ' + a + ' e il suo perimetro è ' + p
}
    return 'l\'oggetto analizzato non è corretto'
}
console.log(parseShape(quadrato))
console.log(parseShape(rettangolo))

const barbagianni = { x: 2, shape: 'rectangle' }
console.log(parseShape(barbagianni))