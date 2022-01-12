
// Hacer un prompt preguntando la edad del que quiere ingresar a la fiesta, y la hora.

const hora = prompt ("¿Que hora es?");
let edad = 1;
let ingresoGratis;
ingresoGratis = true;


// Hacer la condicion de que si es mayor o igual a 18, puede pasar. Caso contrario, no puede pasar.
// La primer persona que entre despues de las 2am, no paga la entrada.

while (edad) {
    edad = prompt ("¿Cuantos años tenes?");

    if (edad >= 18) {
        if (hora >= 2 && ingresoGratis === true) {
            alert ("Son las 2am o mas tarde, podes pasar gratis.");
            ingresoGratis = false;
        } 
        else {
            alert ("Tenes que pagar para ingresar.");
        }
    }
    else {
        alert ("Sos menor de 18, no podes pasar a la fiesta.");
    }
}


