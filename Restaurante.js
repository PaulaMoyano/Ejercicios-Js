
// https://www.hackerrank.com/challenges/bon-appetit/problem

// Complete the 'bonAppetit' function below.

//* The function accepts following parameters:
//*  1. INTEGER_ARRAY bill
//*  2. INTEGER k
//*  3. INTEGER b

// Ejercicio de Hacker Rank:


function bonAppetit(bill, k, b) {
   let acum = 0
   for (let i=0; i<bill.length; i++) {
       acum += bill[i]
   }
   let totalAPagar = acum - bill[k]
   let dividido = (totalAPagar/2)
   if (dividido >= b) {
       console.log("Bon Appetit")
   } else {
       console.log(b-dividido) 
   }
}

bonAppetit([3,10,2,9],1,7)