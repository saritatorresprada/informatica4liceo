// nombres: String
// apellidos: String
// edad: int 
// curso: String
// notas: array de floats 
let estudiantes = [
    {
    nombres: "Sarah Elvira", 
    apellidos: "Torres Prada", 
    edad: 17, 
    curso: "Quarta", 
    notas: [10, 9.5, 7.8, 7.6, 9.7],
},
{
    nombres: "Aura Lucia", 
    apellidos: "Perez Castellanos", 
    edad: 15, 
    curso: "Seconda", 
    notas: [10, 9.5, 7.8, 7.6, 9.7],
},
{
    nombres: "Manuela Alejandra", 
    apellidos: "Galeano Muñoz", 
    edad: 16, 
    curso: "Quarta", 
    notas: [10, 9.5, 7.8, 7.6, 9.7],
},
];

// console.log(estudiante1);
// suma += nota es igual a decir
// suma = suma + nota

let tabla = document.querySelector("#tablaEstudiantes");
for(estudiante of estudiantes)
{
    let fila = document.createElement("tr")
    for(valor of Object.values (estudiante)){
        console.log(valor);
        let celdaNueva = document.createElement("td")
        //let celdaNombre = document.createElement("td")
        celdaNueva.innerHTML = valor;
        fila.appendChild(celdaNueva);
    }
    tabla.appendChild(fila);
}