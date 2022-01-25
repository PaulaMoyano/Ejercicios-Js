// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
    let kangaroo1 = x1;
    let kangaroo2 = x2;
    while ((kangaroo1>kangaroo2 && v2>v1) || (kangaroo2>kangaroo1 && v1>v2)) {
        kangaroo1 += v1
        kangaroo2 += v2
    }

    if(kangaroo1 === kangaroo2) {
        return "YES"
    } else {
        return "NO";
    }
}

console.log(kangaroo(0, 4, 3, 2))
