
// https://www.hackerrank.com/challenges/alternating-characters


// Complete the 'alternatingCharacters' function below.
// The function is expected to return an INTEGER.
// The function accepts STRING s as parameter.


function alternatingCharacters(s) {
    let countIguales = 0
    for (let i=1; i<s.length; i++) {
        if (s[i] === s[i-1]) {
            countIguales++
        }   
    }
        return countIguales
}

alternatingCharacters(a,b,a,b,a,b,a,b)