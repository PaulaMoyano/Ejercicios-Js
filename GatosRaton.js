https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
    let distanciaX = Math.abs(z-x);
    let distanciaY = Math.abs(z-y);
    if (distanciaX > distanciaY) {
        return "Cat B"
    } else if (distanciaX < distanciaY) {
        return "Cat A"
    } else {
        return "Mouse C"
    }
}

let resultado = catAndMouse(15, 10, 8);
console.log(resultado);

