
// https://www.hackerrank.com/challenges/a-very-big-sum/problem

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

const ar = [1,2,3,4,5]

function aVeryBigSum(ar) {
    let suma = 0
    for (let i=0; i<ar.length; i++) {
        suma += ar[i]
    }
    return suma
}

aVeryBigSum(ar)