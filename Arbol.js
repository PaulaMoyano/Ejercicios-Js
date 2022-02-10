
//https://www.hackerrank.com/challenges/utopian-tree/problem

/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function utopianTree(n) {

    let height = 1
    for (let i = 1; i<=n; i++) {
        if (i % 2 === 0) { // Es par, o sea es verano
            height += 1
        } else { // Es impar, o sea es primavera
            height *= 2
        }
    }
    return height
}


console.log(utopianTree(5))