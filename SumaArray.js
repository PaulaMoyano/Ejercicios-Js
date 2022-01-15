const array = [1,2,3,4,5,6,7,8,9]

const sumarArrays = (arrayNumeros) => {
    let sumatoria = 0;
    for (let n = 0; n < arrayNumeros.length; n++) {
        sumatoria = arrayNumeros[n] + sumatoria;
    }
    return sumatoria
}

document.write ("La suma de los elementos es " + sumarArrays(array));
