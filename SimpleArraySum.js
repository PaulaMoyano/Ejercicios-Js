//https://www.hackerrank.com/challenges/simple-array-sum/problem


function simpleArraySum(ar) {
    let suma = 0
    for (let i = 0; i < ar.length; i++ ){
        suma += ar[i]  
    }
    return suma
}

console.log(simpleArraySum[1,2,3,4,5,6,7,8,9,10])