
var nombre = document.getElementById('nombre')
var apellido = document.getElementById('apellido')

var paseDia = document.getElementById("pase_dia")
var paseCompleto = document.getElementById("pase_completo")
var paseDosDias = document.getElementById("pase_dosdias")
var camisaEvento = document.getElementById("camisa-evento")
var etiquetas = document.getElementById("etiquetas")
var regalo = document.getElementById("regalo")

var listaProductos = document.getElementById("lista-productos")
var nombreResumen = document.getElementById("nombre-resumen")
var apellidoResumen = document.getElementById("apellido-resumen")
var boletos = document.getElementById("boletos")
var resumenPaseDia = document.getElementById("resumen-pasedia")
var resumenPaseCompleto = document.getElementById("resumen-pasecompleto")
var resumenPaseDosDias = document.getElementById("resumen-pasedosdias")
var resumenCamisa = document.getElementById("resumen-camisa")
var resumenEtiquetas = document.getElementById("resumen-etiquetas")
var regaloSelect = document.getElementById("regalo-select")

var sumaTotal = document.getElementById("suma-total")
var btnCalcular = document.getElementById("calcular")

btnCalcular.addEventListener('click', textSaver)
//prueba.addEventListener('click', textModifier)
//paseCompleto.addEventListener('click', textSaver(prueba))  //SI LO PONEMOS ASI CON LA FUNCIÓN CON ARGUMENTO SE EJECUTA LA FUNCION CUANDO SE HABRE LA PAGINA Y NO CUANTO HACEMOS EL EVENTO
//paseCompleto.addEventListener('click', clicked)


//función del listener que hace los calculos y pone el resumen y el precio total
function textSaver(){
    //calculos
    var cantPaseDia = paseDia.value * 30
    var cantPaseCompleto = paseCompleto.value * 50
    var cantPaseDosDias = paseDosDias.value * 45
    var cantCamisas = (camisaEvento.value * 10) * 0.93
    var cantEtiquetas = etiquetas.value * 2

    var total =  cantPaseDia + cantPaseCompleto + cantPaseDosDias + cantCamisas + cantEtiquetas
    
    //print pago total
    sumaTotal.textContent = '$' + total

    //parte del resumen
    nombreResumen.textContent = nombre.value
    apellidoResumen.textContent = apellido.value
    boletos.textContent = "Cantidad de boletos:"
    if(cantPaseDia != 0){
        resumenPaseDia.textContent = "Pases por día: " + paseDia.value + " x $30 = $" + cantPaseDia
    }
    if(cantPaseCompleto != 0){
        resumenPaseCompleto.textContent = "Pases completos: " + paseCompleto.value + " x $50 = $" + cantPaseCompleto
    }
    if(cantPaseDosDias != 0){
        resumenPaseDosDias.textContent = "Pases por dos días: " + paseDosDias.value + " x $45 = $" + cantPaseDosDias
    }
    if(cantCamisas != 0){
        resumenCamisa.textContent = "Camisas: " + camisaEvento.value + " x $10 (+ 7% de descuento) = $" + cantCamisas
    }
    if(cantEtiquetas!= 0){
        resumenEtiquetas.textContent = "Etiquetas: " + etiquetas.value + " x $2 = $" + cantEtiquetas
    }
    if(regalo.value == 1){
        regaloSelect.textContent = "Regalo: Etiquetas"
    }
    else if(regalo.value == 2){
        regaloSelect.textContent = "Regalo: Pulsera"
    }
    else if(regalo.value == 3){
        regaloSelect.textContent = "Regalo: Plumas"
    }

}



