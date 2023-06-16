import express from "express";
import * as album from '../src/roots.mjs'
const app = express();
const port = 3000;


app.get('/',album.firstPage)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



