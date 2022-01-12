// Pedirle al usuario que ingrese el dinero con el que cuenta. Despues mostrarle cuales helados le alcanza. Finalmente indicar el vuelto.

let dineroPablo = prompt ("¿Cuanta plata tenes Pablo?");
let dineroPaula = prompt ("¿Cuanta plata tenes Paula?");
let dineroMariano = prompt ("¿Cuanta plata tenes Mariano?");

const helados = [["Vasito chico", 10], ["Vasito mediano", 20], ["Vasito grande", 30], ["Paleta", 20]];

const comprarHelado = (dinero, nombre) => {
    let heladoComprado = []
    let precioAPagar = 0
    for (let index = 0; index < helados.length; index++) {
        const heladoActual = helados[index]
        if(precioAPagar < heladoActual[1] && dinero >= heladoActual[1]) {
            heladoComprado = [heladoActual[0]]
            precioAPagar = heladoActual[1]
        } else if(precioAPagar === heladoActual[1]) {
            heladoComprado.push(heladoActual[0])
        }
    }
    alert(nombre + ", podes comprar estos helados: " + heladoComprado + " y te sobra " + (dinero - precioAPagar))
}

comprarHelado(dineroPablo, "Pablo")
comprarHelado(dineroPaula, "Paula")
comprarHelado(dineroMariano, "Mariano")

