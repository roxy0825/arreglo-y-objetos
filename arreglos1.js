//arreglos
let numeros = [1,2,3,4,5,6,7,8,9]

let nombres = Array("sebastian","roxy","tatiana","amy")

// 1. yo quiero recorrer un arreglo para filtar informacion

//buacar si en numero hay un numero mayor a 5
//funcion para llamar arreglo
//dentro de array metodo va una funcion anonima
//variables auxiliar solo existe adentro
let filtro=numeros.filter(function(numero){
    return(numero>5)
})
console.log(filtro)

//flecha

let filtro2=numeros.filter(numero=>numero>5)

console.log(filtro2)

// quiero buscar si en el arreglo de numero esta el numero diez

let filtro3 = numeros.filter(function(numero){
    return numero === 10;
})
console.log(filtro3)
//flecha
let filtro4 = numeros.filter(numero=>numero===10)
console.log(filtro3)