import express from 'express'
const app = express()
const port = 3000

import bodyParser from 'body-parser'
app.use(bodyParser.json())

import {
    create
} from './user-routes.mjs'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/users', create)
app.get('/users/:id', get)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})