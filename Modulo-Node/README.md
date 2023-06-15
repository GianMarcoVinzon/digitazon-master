Per installare le dipendenze 
```
npm install
```
Per far partire il server : 
```
npm start
```
Per far partire il server in development mode:
```
npm run dev
```
nodemen;
```
npm install nodemon
```
Exspress:
```
npm init 
npm install express
npm install --save-dev nodemon (nodemon)
npm install axios
npm install cors //

togliere tutto a parte sotto le dependency anche da script e aggiungere;

 "type": "module", // nell' index.js inserire sopra a script ( import express from 'express' )
 "start": "node index.js",
 "dev": "nodemon index.js"

cosi da poter usare:
npm run dev

installare cors nel server e configurarlo per conettere
frontend e backhand