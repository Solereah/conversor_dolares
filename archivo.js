'use strict'






function conversorDolares(){
    let dolarHoy= 102.5  
    let ingresoDolares = document.getElementById("dolares").value
    let resultado = ingresoDolares * dolarHoy 
    
    let conversion = document.getElementById('pesos')
    let impuestoPais = document.getElementById('impuesto-pais')
    let rentencionGanacias = document.getElementById('ganancias')

    let resultadoTotal = document.getElementById('total')
    let sumaResultados = resultado + (resultado * 30)/100 + (resultado *35)/100

    if(resultado<=0){
        alert('No se puede calcular eso')
        }
        else{
            conversion.innerHTML = resultado
            impuestoPais.innerHTML = (resultado * 30)/100
            rentencionGanacias.innerHTML = (resultado *35)/100
            resultadoTotal.innerHTML = sumaResultados
        }

}
    
  
    