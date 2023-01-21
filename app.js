const path = require('path')
const express = require('express')

const modulos = require('./modulos')

const app = express()
const directorioPublico = path.join(__dirname, './public')


app.use(express.static(directorioPublico))

app.get('', (req, res) =>{
    
    console.log("El server está encendido")
})

app.get('/tiempo',(req,res)=>{
    if (!req.query.ciudad) {
        return res.send({
            error: "Debes dar una ciudad como dato"
        })
    }

    modulos.pedirTiempo(req.query.ciudad, (clima)=>{
        res.send(clima)
    })
})


app.listen(3000, ()=>{
    console.log("El server está encendido")
})