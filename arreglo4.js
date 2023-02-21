let inmuebles = [
    {id:1,nombre:"EL VIP", direccion:"cll 100"},
    {id:1,nombre:"PROVENZA", direccion:"cr 80"},
    {id:3,nombre:"EL RAUDAL", direccion:"cll 10"}
]

let buscar = inmuebles.find(function(inmueble){
    return(inmueble.id==1)
    
})
let buscar2 = inmuebles.filter(function(inmueble){
    return(inmueble.id==1)
})
let buscar3 = inmuebles.some(function(inmueble){
    return(inmueble.id==1)
})
console.log(buscar)
console.log(buscar2)
console.log(buscar3)
