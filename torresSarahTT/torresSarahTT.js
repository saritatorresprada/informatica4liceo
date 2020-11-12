// let tabla = document.querySelector("#tablaTareas");
// let tareas = [];

// function addHeaders() {
//     let fila = document.createElement("td");
//     let enc1 = document.createElement("th");
//     enc1.innerHTML = "Materia";
//     let enc2 = document.createElement("th");
//     enc2.innerHTML = "Descripción";
//     let enc3 = document.createElement("th");
//     enc3.innerHTML = "Fecha"; 

//     fila.appendChild(enc1);
//     fila.appendChild(enc2);
//     fila.appendChild(enc3);

//     tabla.appendChild(fila);
// }

// function hacerTabla() {
//     tabla.innerHTML = "";
//     addHeaders();
//     for (item of tareas) {
//         let fila = document.createElement("tr");
//         let tdMateria = document.createElement("td");
//         tdMateria.innerHTML = item;
//         let tdDescripcion = document.createElement("td");
//         tdDescripcion.innerHTML = item;
//         let tdFecha = document.createElement("td");
//         tdFecha.innerHTML = item;

//         fila.appendChild(tdMateria);
//         fila.appendChild(tdDescripcion);
//         fila.appendChild(tdFecha);

//         tabla.appendChild(fila);
//     }
// }

// let inputAddM = document.querySelector("#inputAddM");
// let inputAddD = document.querySelector("#inputAddD");
// let inputAddF = document.querySelector("#inputAddF");
// let btn = document.querySelector("#btnAdd");

// function addItem1() {
//     let itemM = inputAddM.value;
//     tareas.push(itemM);
//     hacerTabla();
//     inputAddM.value = "";
// }

// function addItem2() {
//     let itemD = inputAddD.value;
//     tareas.push(itemD);
//     hacerTabla();
//     inputAddD.value = "";
// }

// function addItem3() {
//     let itemF = inputAddF.value;
//     tareas.push(itemF);
//     hacerTabla();
//     inputAddF.value = "";
// }
// btn.onclick = addItem1;
// btn.onclick = addItem2;
// btn.onclick = addItem3;
// hacerTabla();

let tabla = document.querySelector("#tablaTareas");
// let tareas = [];
let tareas = JSON.parse(window.localStorage.getItem("tareas"));
if (tareas == null) tareas = [];

function addHeaders() {
    let fila = document.createElement("td");
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
    for (item of tareas) {
        let fila = document.createElement("tr");
        let tdMateria = document.createElement("td");
        tdMateria.innerHTML = item[0];
        let tdDescripcion = document.createElement("td");
        tdDescripcion.innerHTML = item[1];
        let tdFecha = document.createElement("td");
        tdFecha.innerHTML = item[2];

        fila.appendChild(tdMateria);
        fila.appendChild(tdDescripcion);
        fila.appendChild(tdFecha);

        tabla.appendChild(fila);
    }
}

let inputAddM = document.querySelector("#inputAddM");
let inputAddD = document.querySelector("#inputAddD");
let inputAddF = document.querySelector("#inputAddF");
let btn = document.querySelector("#btnAdd");


function addItems(){
    let itemM = inputAddM.value;
    let itemD = inputAddD.value;
    let itemF = inputAddF.value;

    tareas.push(new Array(itemM, itemD, itemF));

    window.localStorage.setItem("tareas", JSON.stringify(tareas));

    hacerTabla();
    limpiarInputs();
   
}

function limpiarInputs(){
    inputAddM.value = "";
    inputAddD.value = "";
    inputAddF.value = "";
}

btn.onclick = addItems;
hacerTabla();