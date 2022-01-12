// Crear una calculadora que nos permita realizar operaciones de suma, resta, multiplicacion y division.

// Declarar los prompt para que complete el usuario.

let operacion; //Valores disponibles: 1, 2, 3 o 4.
operacion = prompt ("Seleccione la operacion que desea realizar: 1 para sumar; 2 para restar; 3 para multiplicar; 4 para dividir");
const operacionesValidas = ["1","2","3","4"]; //Const ya que son las unicas que puede seleccionarse.
while (operacionesValidas.includes (operacion) === false) { //Aclaracion en caso de que el usuario seleccione una operacion no valida.
    operacion = prompt ("Operacion no valida. Seleccione 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir");
} 

let numero1;
numero1 = prompt ("Ingrese el numero al cual va a sumar, restar, multiplicar o dividir");
numero1 = parseInt (numero1);
let numero2;
numero2 = prompt ("Ingrese el otro numero que va a sumarse, restarse, multiplicarse o dividirse con el anterior");
numero2 = parseInt (numero2);

// Declarar LET con las posibles operaciones y soluciones.

// let suma = numero1 + numero2;
// let resta = numero1 - numero2;
// let multiplicacion = numero1 * numero2;
// let division = numero1 / numero2;


// Mostrar las respuestas.

let resultado

if (operacion==="1") {
    resultado = numero1 + numero2;
}
else if (operacion ==="2") {
    resultado = numero1 - numero2;
}
else if (operacion==="3") {
    resultado = numero1 * numero2;
}
else if (operacion==="4") {
    while (numero2 === 0) {
        alert ("No puede dividirse por 0. Seleccione otro numero.");
        numero2 = prompt ("Seleccione un numero valido, que NO sea 0.");
    }
    resultado = numero1 / numero2;
}

alert ("El resultado es " + resultado);






