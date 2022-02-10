// https://www.hackerrank.com/challenges/the-hurdle-race/problem

/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    let maximo = 0
    for ( let i = 0; i < height.length; i++) {
        if (height[i] > maximo) {
            maximo = height[i]
        }
    }
    
    if ( k > maximo ) {
        return 0
    } else {
        return (maximo - k)
    }
}

console.log(hurdleRace(10,[1,2,3,4,5,6,7,8,9,10,11]))

// let result = hurdleRace(parametros)
