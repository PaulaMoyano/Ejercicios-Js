const array = []

for (let index = 0; index < 20; index++) {
    array[index] = Math.floor(Math.random() * 100);
}

const max = (ar) => {
    let maxEncontrado = ar[0];
    for (let index = 1; index < ar.length; index++) {
        if (ar[index]>maxEncontrado) {
            maxEncontrado = ar[index];
        } 
    }
    return maxEncontrado
}

document.write("<br>ARRAY: " + array)
document.write("<br>MAXIMO: " + max(array))