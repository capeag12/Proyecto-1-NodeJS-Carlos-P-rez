const axios = require('axios')
const Clima = require('./clima')

exports.pedirTiempo = (ciudad, manipulacion)=>{
    let url = `http://api.weatherstack.com/current?access_key=df6105e7bf0edc254862919a69ef86ae&query=${ciudad}`
    console.log(url)
    axios.get(url).then((res)=>{
        console.log(res.data.success)
        //El error no funciona
        if (res.data.success == false) {
            console.log("Error")
            manipulacion({
                error:"Hubo un error en tu petición"
            })
        } else{
            let clima = new Clima(res.data.current.temperature, res.data.current.humidity)
        manipulacion(clima)
        } 
    }).catch((err)=>{
        
    })

}