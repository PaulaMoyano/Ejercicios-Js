const array = [1,2,3,4,50,6,7,8,9,10];
let elementoAEncontrar = parseInt(prompt("Que numero debo encontrar?"));

const encontrarEnArray = (array, elementoAEncontrar) => {
    for (let index = 0; index < array.length; index++) {        
        if (elementoAEncontrar === array[index]) {
            return index
        }
    }

    return "No se encontro el numero";
}

const posicion = encontrarEnArray (array, elementoAEncontrar);
document.write ("La posicion del numero elegido es " + posicion);

