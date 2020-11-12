let tabla = document.querySelector("#tablaTareas");
let filaAñadida = JSON.parse(window.localStorage.getItem("tareas"));
if (filaAñadida==null) compras = [];

let encabezados = [
   {
      columna1: "Materia",
      columna2: "Descripcion",
      columna3: "Fecha",
   }
];

function crearTabla(){
   for (columna of encabezados){
      let fila = document.createElement("tr");
      for(valor of Object.values(columna)){
         let celdaNueva = document.createElement("th");
         celdaNueva.innerHTML = valor;
        fila.appendChild(celdaNueva);
      }
      tabla.appendChild(fila);
   }
}
let btn = document.querySelector("#btnAdd");
btn.onclick = addTabla;
crearTabla();

let inputMat = document.querySelector("#materia").value;
let inputDesc = document.querySelector("#descripcion").value;
let inputFec = document.querySelector("#fecha").value;

filaAñadida = [
   {
      Materia: inputMat,
      Descripcion: inputDesc,
      Fecha: inputFec,
   }
];

function addTabla(){
   for (columna of filaAñadida){
      let fila = document.createElement("tr");
      for(valor of Object.values(columna)){
         let celdaNueva = document.createElement("td");
         window.localStorage.setItem("tareas", JSON.stringify(filaAñadida));
         celdaNueva.innerHTML = valor;
         fila.appendChild(celdaNueva);
         
      }
      tabla.appendChild(fila);
   }
}
function prueba(){
    console.log("Hola Sarah");
}