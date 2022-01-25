function breakingRecords(scores) {
    let min = scores[0]
    let countMin = 0
    let max = scores[0]
    let countMax = 0
    
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] > max) {
            countMax++
            max = scores[i]
        }
        
        if(scores[i] < min) {
            countMin++
            min = scores[i]
        }
    }
    
    const resultado = [countMax, countMin]
    
    return resultado
}

let scores = [10,24,12,24,8];
breakingRecords(scores);


