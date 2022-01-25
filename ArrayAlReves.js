https://www.hackerrank.com/challenges/arrays-ds/problem

function reverseArray(a) {
    let alReves = [];
    for (let i = 0; i < a.length; i++) {
        alReves[i] = a[a.length - 1 - i]
    }
    
    return alReves
}