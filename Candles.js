// Ejercicio de HackerRank

// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

let candles = [1,2,3,4,5,5]

function birthdayCakeCandles(candles) {
    let tallestCandle = 0
    let countCandles = 0
    for (let i=0; i<candles.length; i++) {
        if (candles[i] > tallestCandle) {
            tallestCandle = candles[i]
            countCandles = 1
        } else if (candles[i] === tallestCandle) {
            countCandles++ 
        }
    }
    return countCandles
}

console.log(birthdayCakeCandles(candles))