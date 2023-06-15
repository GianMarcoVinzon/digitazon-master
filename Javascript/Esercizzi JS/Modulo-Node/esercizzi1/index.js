// Fare in modo che le delete non cancellino mai i record dai database.
// Prevedere un attributo in piu' per ogni risorsa,
// ad esempio "cancelled", che permetta di ignorare la risorsa per ogni chiamata successiva.
// Ad esempio

// {
//   name: "Marie, surname: "Curie", cancelled: true
// }
// id: 1
// GET /users/1
// { error: true, message: 'user not found', data: {}}

// deve fare una GET a questo indirizzo https://fakestoreapi.com/users/1,
// utilizzando l'id corretto, e completare tutti i campi dell'oggetto
// utente con cio' che si trova nella risposta dell'API
// * proteggere le chiamate PUT e DELETE con un token che
// va specificato negli header, questo token deve contenere un
// "segreto" che e' specificato nel server, non vi preoccupate di 
// criptare/crittografare/etc niente di tutto cio'. Questo e' il solito 
// esempio di task di esplorazione della teoria

// Partendo dal server che abbia almeno le rotte dell'utente:
// * quando viene creato un utente tramite POST si deve fare
// una GET a questo indirizzo https://fakestoreapi.com/users/1,
// utilizzando l'id corretto, e completare tutti i campi 
// dell'oggetto utente con cio' che si trova nella risposta dell'API
// * proteggere le chiamate PUT e DELETE con un token che va 
// specificato negli header, questo token deve contenere un "segreto" 
// che e' specificato nel server, non vi preoccupate di criptare/crittografare/etc 
// niente di tutto cio'. Questo e' il solito esempio di task di esplorazione della teoria. 
// Quindi il token deve essere controllato nel server: controllarlo vuol dire verificare 
// che nel server sia uguale a quanto specificato nel client.

import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})