
// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */

function designerPdfViewer(h, word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let maximo = 0
    for(let i = 0; i < word.length; i++) {
        const position = alphabet.indexOf(word[i]);
        const height = h[position]
        if ( height > maximo ) {
            maximo = height
        }
    }
    const highlight = maximo*(word.length)
    return highlight
}

const alturas = [1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
const palabra = "paula"

console.log(designerPdfViewer(alturas, palabra))
