let txtCiudad, btnPedir, parrafoMostrar, btnOtraPag

function main() {
    txtCiudad = document.querySelector("#ciudad");
    btnPedir = document.querySelector("#btnAccion")
    parrafoMostrar = document.querySelector("#mostrar")
    btnPedir.addEventListener("click",pedirTiempo)
    
}

function pedirTiempo() {
    let ciudad = txtCiudad.value
    fetch(`http://localhost:3000/tiempo?ciudad=${ciudad}`).then((data) => {
        data.json().then((parsed) => {
            if (parsed.error) {
                parrafoMostrar.textContent = parsed.error
            }
            else{
                let temperatura = parsed.temperatura
                let humedad = parsed.humedad

                parrafoMostrar.textContent = `El tiempo en ${ciudad}, tiene una temperatura de ${temperatura}º, y una humedad de ${humedad}% `
            }
        })
    }).catch((err)=>{
        parrafoMostrar.textContent = `El backend ha fallado`
    })
    txtCiudad.value = ""
}


window.addEventListener("load", main)