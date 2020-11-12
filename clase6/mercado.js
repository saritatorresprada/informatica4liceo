let compras = JSON.parse(window.localStorage.getItem("compras"));
let lista = document.querySelector("#listaMercado");
// que ocurre si la variable compras no existe en el almacenamiento local?
if (compras==null) compras = [];

// Opcion 1, for como en C
// for (let i = 0; i < compras.length; i++) {
//   let elemento = document.createElement("li");
//   elemento.innerHTML = compras[i];
//   lista.appendChild(elemento);
// }

// Opcion 2, for of.
// Se hace lo mismo para cada uno de los elementos de la lista.
function hacerLista(){
    lista.innerHTML = "";
    for (item of compras) {
        let elemento = document.createElement("li");
        elemento.innerHTML = item;
        lista.appendChild(elemento);
    }
}
let input = document.querySelector("#inputAdd");
let btn = document.querySelector("#btnAdd");

// Event listener
function addItem(){
    // leer el valor que el usuario escribio
    let item = input.value;
    compras.push(item);
    window.localStorage.setItem("compras", JSON.stringify(compras));
    hacerLista();
    // borrar lo que el usuario escribio
    input.value = "";
}
btn.onclick = addItem;
hacerLista();

// el amacenamiento local guarda unicamente cadenas de caracteres
//let notas = [6, 7, 8, 5, 7, 10, 6]
//JSON quiere decir javascript object notation
//console.log(JSON.stringify(notas));
// generar la cadena de caracteres correspondientes a la variable notas
// guardar la cadena de caracteres en el almacenamiento local
//window.localStorage.setItem("Curso", "Quarta");
//window.localStorage.setItem( "Notas",JSON.stringify(notas))