
   const Students = JSON.parse(json)

function mediumValue(array) {
    if (Array.isArray(array)) {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        return sum / array.length
    }
    return 0
}

function bestStudent(object) {
    let bestRate = mediumValue(object[0].rate)
    for (let i = 1; i < object.length; i++) 
        if (mediumValue(object[i].rate) > bestRate) 
            bestRate = mediumValue(object[i].rate)
    let bestSts = []
    for (let i = 0; i < object.length; i++) 
        if (mediumValue(object[i].rate) == bestRate) 
            bestSts.push(object[i].fullname)
    return bestSts
}

function worstStudent(object) {
    let worstRate = mediumValue(object[0].rate)
    for (let i = 1; i < object.length; i++) 
        if (mediumValue(object[i].rate) < worstRate) 
            worstRate = mediumValue(object[i].rate)
    let worstSts = []
    for (let i = 0; i < object.length; i++) 
        if (mediumValue(object[i].rate) == worstRate) 
            worstSts.push(object[i].fullname)
    return worstSts
}

console.log('i migliori studenti sono: ' + bestStudent(Students))
console.log('i peggiori studenti sono: ' + worstStudent(Students))
  