encabezado = document.querySelector("h1")
//console.log(encabezado);
texto = prompt("Ingrese el texto que quiera en el encabezado")
encabezado.innerHTML = texto;
//el innerHTML es el texto que está dentro del objeto
// backgroundColor corresponde al color del fondo
color = prompt("Ingrese el color deseado")
encabezado.style.backgroundColor = color;
body = document.querySelector("body");
body.style.backgroundColor = color;