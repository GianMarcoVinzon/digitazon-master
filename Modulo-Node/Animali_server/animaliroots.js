import categorie from "./db/categorie.json" assert { type: 'json' }

const categGet = (req, res) => {
    res.send(categorie);
}

const singleCategGet = (req, res) => {
    Object.keys(categorie).includes(req.params.id) &&
        res.send(categorie[req.params.id])
}



export {
    categGet,
    singleCategGet
}