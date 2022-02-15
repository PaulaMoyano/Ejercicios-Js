//https://www.hackerrank.com/challenges/strange-advertising/problem

/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
    let acumulativeLikes = 0
    let liked = 0
    let shared = 5
    for (let i = 0; i<n; i++) {
        liked = Math.floor(shared / 2)
        acumulativeLikes += liked 
        shared = liked * 3 
    }
 return acumulativeLikes
}

console.log(viralAdvertising(4))