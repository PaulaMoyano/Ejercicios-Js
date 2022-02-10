
https://www.hackerrank.com/challenges/grading/problem

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    let score = 0
    let result = []
    for ( let i=0; i<grades.length; i++) {
        if ((grades[i]%5) > 2 && grades[i] >= 38) {
            // rounding
            if (grades[i]%5 === 3) {
                result.push(grades[i] + 2)
            }
            else if (grades[i]%5 === 4) {
                result.push(grades[i] + 1)
            }
        } else {
            // no rounding
            result.push(grades[i])
        }
    }
    
    return result
    
}