let tabla = document.querySelector("#tablaTareas");
let ambitos = JSON.parse(window.localStorage.getItem("ambitos"));
if (ambitos == null) ambitos = [];

function addHeaders() {
  let fila = document.createElement("tr");
  let enc1 = document.createElement("th");
  enc1.innerHTML = "Materia";
  let enc2 = document.createElement("th");
  enc2.innerHTML = "Descripción";
  let enc3 = document.createElement("th");
  enc3.innerHTML = "Fecha";

  fila.appendChild(enc1);
  fila.appendChild(enc2);
  fila.appendChild(enc3);
  tabla.appendChild(fila);
}
function hacerTabla() {
  tabla.innerHTML = "";
  addHeaders();
  let amb = ambitos.length/3
  let amb1 = ambitos.length - 3
    for(var i = 0 ; i < amb  ; i++) {
    let fila = document.createElement("tr");
    let tdMateria = document.createElement("td");
    tdMateria.innerHTML = ambitos[amb1]; 
    let tdDescripcion = document.createElement("td");
    tdDescripcion.innerHTML = ambitos[amb1+1]; 
    let tdFecha = document.createElement("td");
    tdFecha.innerHTML = ambitos[amb1+2]; 
    amb1 = amb1 -3 
   
  
    
    fila.appendChild(tdMateria);
    fila.appendChild(tdDescripcion);
    fila.appendChild(tdFecha); 
    tabla.appendChild(fila);
   
  
 }
}
let inputDesc = document.querySelector("#inputDesc");

let inputFec = document.querySelector("#inputFec");
let addfec = document.querySelector("#addfec");

function addItemt() {
  let item = inputMat.value;
  ambitos.push(item)
  let item1 = inputDesc.value;
  ambitos.push(item1)
  let item2 = inputFec.value;
  ambitos.push(item2)
  window.localStorage.setItem("ambitos", JSON.stringify(ambitos))
  //ambitos = [item, item1, item2]
    hacerTabla();
  
  inputMat.value = "";
  inputDesc.value = "";
  inputFec.value = "";
}

btn.onclick = addItemt;

hacerTabla();
