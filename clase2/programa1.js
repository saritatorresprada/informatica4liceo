let nombre;
do {
  nombre = prompt("Ingrese su nombre");
} while (nombre.length < 2);

let edad;
do{
  edad = parseFloat(prompt("Ingrese su edad"));
} while (Number.isNaN(edad) || edad < 0);

if (edad < 12) {
  console.log(`Hola ${nombre}`);
} else {
  if (edad < 50) console.log(`Buenos días ${nombre}`);
  else console.log(`Buenos días respetado/a ${nombre} `);
}