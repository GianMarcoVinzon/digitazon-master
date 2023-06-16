import albumFotografico from '../db/albumFotografico.json' assert {type: 'json'}
import foto from '../db/foto.json' assert {type: 'json'}


async function albumFotografico(){
    const filePath ='../db/albumFotografico';
    const fileContent = albumFotografico.readFileSync("fotografie")
    return JSON.parse("fotografie")
} if(found.code === "fotografie"){
    next()
  }  else {
    res
  .status(404)
  .send({
    data: {},
    error: true,
    message: 'foto non trovato'
  })
}

export const firstPage = (req, res) => {
    res.send('hello')
}

export const getAlbum = (req, res) =>{
    res.send(albumFotografico)
}

export const getFoto = (req, res) =>{
    res.send(foto)
}


