//arreglos de diferentes tipo

let estudiantes = Array(

    {nombre:"juan",edad:"33",cedula:"123455"},
    {nombre:"catalina",edad:"27",cedula:"987646"}
)

//mapeando el arreglo

let mapa=estudiantes.map(function(estudiante){
    estudiante.nota=1
    estudiante.edad=estudiante.edad-1
    return (estudiante)
})
console.log(mapa)