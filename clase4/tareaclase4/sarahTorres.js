// Tarea semana de receso
let tareas = ["Matemática", "Hacer ejercicios de classroom", "12 octubre 2020"]
let tabla = document.querySelector("#tablaTareas");
let itemM = ["Matemática"]
let itemD = ["Hacer ejercicios de classroom"]
let itemF = ["Mañana"]


function addHeaders() {
    let filaM = document.createElement("tr");
    let enc1 = document.createElement("th");
    enc1.innerHTML = "Materia";
    let filaD = document.createElement("tr");
    let enc2 = document.createElement("th");
    enc2.innerHTML = "Descripción";
    let filaF = document.createElement("tr");
    let enc3 = document. createElement("th");
    enc3.innerHTML = "Fecha";

    filaM.appendChild(enc1);
    filaD.appendChild(enc2);
    filaF.appendChild(enc3);

    tabla.appendChild(filaM);
    tabla.appendChild(filaD);
    tabla.appendChild(filaF);

}

function hacerTabla() {
    tabla.innerHTML = "";
    addHeaders();
    for (item of itemM) {
        let fila = document.createElement("tr");
        let tdMateria = document.createElement("td");
        tdMateria.innerHTML = itemM;
        filaM.appendChild(tdMateria);
    }
    for (item of itemD){
        let tdDescripcion = document.createElement("td");
        tdDescripcion.innerHTML = itemD;
        filaD.appendChild(tdDescripcion);
    }
    for (item of itemF){
        let tdFecha = document.createElement("td");
        tdFecha.innerHTML = itemF;
        filaF.appendChild(tdFecha);
    }
    tabla.appendChild(fila);
}


let inputAddM = document.querySelector("#inputAddM");
let inputAddD = document.querySelector("#inputAddD");
let inputAddF = document.querySelector("#inputAddF");
let btnM = document.querySelector("#btnAddM");
let btnD = document.querySelector("#btnAddD");
let btnF = document.querySelector("#btnAddF");


function addItemM() {
    let itemM = inputAddM.value
    tareas.push(itemM);
    hacerTabla();
    inputAddM.value = "";
}
function addItemD() {
    let itemD = inputAddD.value
    tareas.push(itemD);
    hacerTabla();
    inputAddD.value = "";
}
function addItemF() {
    let itemF = inputAddF.value
    tareas.push(itemF);
    hacerTabla();
    inputAddF.value = "";
}

btnM.onclick = addItemM;
btnD.onclick = addItemD;
btnF.onclick = addItemF;
hacerTabla();