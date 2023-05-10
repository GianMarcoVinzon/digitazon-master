function and(...bool) {
    for (let i = 0; i < bool.length; i++) {
        if (!bool[i]) {
            return bool[i]
        }
    }
    return true
}


console.log(AND(true,false))