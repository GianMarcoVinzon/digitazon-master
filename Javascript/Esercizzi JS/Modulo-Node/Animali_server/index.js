import express from 'express'
import { 
    categGet,
    singleCategGet
} from './animaliRoutes.mjs'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('animali')
})
app.get('/categorie', categGet)
app.get('/categorie/:id', singleCategGet)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
