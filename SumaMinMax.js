function miniMaxSum(arr) {
    let max = 0
    let min = arr[0]
    let acum = 0
    for(let i = 0; i < arr.length; i++) {
        // ENCUENTRO MAXIMO
        if(max < arr[i]) {
            max = arr[i]
        }
        //
    
        // ENCUENTRO MINIMO
        if(min > arr[i]) {
            min = arr[i]
        }
        //
    
        // SUMO ELEMENTOS DEL ARRAY
        acum += arr[i]
        //
    }

    let resultado = acum - max
    let resultado2 = acum - min
    
    console.log(resultado, resultado2)
}

miniMaxSum([4,2,5,1,3])