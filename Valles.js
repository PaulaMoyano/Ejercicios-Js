
//https://www.hackerrank.com/challenges/counting-valleys/problem

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(path) {
    let altura = 0
    let countValle = 0
    for (let i = 0; i<path.length; i++) {
        if (path[i] === "U") {
            altura++
        } else if (path[i] === "D") {
            altura--
            if (altura === -1) {
                countValle++
            } 
        }
        
    }
    return countValle
}

console.log(countingValleys("DUUUDUDUDDDUUDDDUDUDUDUD"))