//https://www.hackerrank.com/challenges/a-very-big-sum

function aVeryBigSum(ar) {
    let suma = 0
    for (let i = 0; i<ar.length; i++) {
        suma += ar[i]
    }
    return suma
}

console.log(aVeryBigSum[1,2,3,4,5,6,7,8,9,10])