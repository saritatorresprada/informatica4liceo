// EVENT LISTENERS
boton = document.querySelector("#boton1");

//parrafIntro = document.querySelector("#parrafIntro");

function cambiarcolor(){
    parrafIntro.style.backgroundColor = "red";
    alert("Color cambiado");
}

//Al hacer click sobre el boton queremos que se ejecute la funcion cambiarcolor

boton.onclick = cambiarcolor;