let numeros = [10,20,30,40,50,60,70,80,90,100]

//mayores o iguales de 50
let filtrar= numeros.filter(function(numero){
    return(numero>=50)
})
console.log(filtrar)
// mapear el filtro y restarle a cada elemento del arreglo 10
let numeromenos10=filtrar.map(function(numero){
   return (numero=numero-10)
})
console.log(numeromenos10)
// encontrar si esta el numero diez

let numero10= numeromenos10.some(function(numero){
    return(numero==10)

})
console.log(numero10)




