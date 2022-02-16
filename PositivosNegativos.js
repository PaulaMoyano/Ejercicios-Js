//https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positivos++
        } else if (arr[i] < 0) {
            negativos++
        }
        else {
            ceros++
        }
    }
    console.log (positivos/arr.length);
    console.log (negativos/arr.length);
    console.log (ceros/arr.length);
}


plusMinus([-4,-2,0,2,5,7,10]);

