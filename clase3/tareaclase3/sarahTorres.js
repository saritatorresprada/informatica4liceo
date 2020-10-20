botonColor = document.querySelector("#boton1");
parraf = document.querySelector("#parrafIntro");
function cambiarcolor (){
    parraf.style.backgroundColor = "white";
}
botonColor.onclick = cambiarcolor;

botonOcultar = document.querySelector("#boton2");
function ocultarparrafo (){
    parraf.style.display = "none";
}
botonOcultar.onclick = ocultarparrafo;

botonMostrar = document.querySelector("#boton3");
function mostrarparrafo (){
    parraf.style.display = "block";
}
botonMostrar.onclick = mostrarparrafo;

function mouseOver() {
document.getElementById("imagenPadding").style.padding = "20px";
}
document.getElementById("imagenPadding").onmouseover = function() {mouseOver()};

function mouseOut() {
document.getElementById("imagenPadding").style.padding = "0px";
}
document.getElementById("imagenPadding").onmouseout = function() {mouseOut()};
