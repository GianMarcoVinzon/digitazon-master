function print({chaive1, chaive2}){
console.log(chaive1, chaive2)
}

function print2(obj){
    let {chiave1, chiave2} = obj
    console.log(chiave1, chiave2)
}

print({chiave1: 1, chaive2: 2, chaive3: 3, chiave4: 4})
print2({chiave1: 1, chaive2: 2, chaive3: 3, chiave4: 4})
