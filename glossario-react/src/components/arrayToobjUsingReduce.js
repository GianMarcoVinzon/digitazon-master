//Da array a oggetto usando reduce 


let obj = arr.reduce((res, n, i) => {
    res[i] = n
    return res
}, {})