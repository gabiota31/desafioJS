let listaValores = []

function guardarValorinputs(){
    var porDia = document.getElementById("pase_dia")
    var completo = document.getElementById("pase_completo")
    var dosDias = document.getElementById("pase_dosdias")
    porDia.style.backgroundColor = 'yellow'
    listaValores.push(porDia.value, completo.value, dosDias.value)
    console.log(listaValores)
}


let btnCalcular = document.getElementById('calcular')
console.log(btnCalcular)
btnCalcular.addEventListener('click', guardarValorinputs)























/*
function gurdarValorInput(input, lista){
    input.style.backgroundColor = 'yellow'
    lista.push(input.value)
    console.log(lista)
}
*/
