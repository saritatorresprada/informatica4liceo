let compras = ["Arroz", "Lentejas", "Papas"];
let lista = document.querySelector("#listaMercado");

//opcion 1, for como en C
// for (let i = 0; i < compras.length; i++) {
//     let elemento = document.createElement("li");
//     elemento.innerHTML = compras[i];
//     lista.appendChild(elemento);
// }
//ctrol k + c comentar

//opcion 2 for of
// se hace lo mismo para cada uno de los elementos de la lista
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

//event listener
function addItem(){
    //leer el valor que el usuario escribió
    let item = input.value;
    compras.push(item);
    hacerLista();
    // //crear un nuevo elemento lista
    // let elemento = document.createElement("li");
    // //poner el valor del texto del elemento lista
    // elemento.innerHTML = item;
    // //poner el elemento li como child de la lista
    // lista.appendChild(elemento);
    //para borrar lo que el usuario escribió
    input.value = "";
}
btn.onclick = addItem;
hacerLista();

