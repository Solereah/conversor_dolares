'use strict'

let btn = document.getElementById('btn-conversor') 


function conversorDolares(){
    let ingresoDolares = document.getElementById('dolares').value
    let conversion = document.getElementById('pesos')
    let impuestoPais = document.getElementById('impuesto-pais')
    let rentencionGanacias = document.getElementById('ganancias')
    let resultadoTotal = document.getElementById('total')
    
    let dolarHoy= 105.18  
    let resultado = ingresoDolares * dolarHoy 
    let sumaResultados = (resultado + (resultado * 30)/100 + (resultado *35)/100).toFixed(2)

    if(resultado<=0){
        alert('No se puede calcular eso')
        }
        else{
            conversion.innerHTML =`$${resultado}` 
            impuestoPais.innerHTML = `$${(resultado * 30)/100}`
            rentencionGanacias.innerHTML = `$${(resultado *35)/100}`
            resultadoTotal.innerHTML = `$${sumaResultados}`
        }

}

btn.addEventListener('click', conversorDolares)














    


  
    