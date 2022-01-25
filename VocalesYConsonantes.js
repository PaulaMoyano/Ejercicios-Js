
function vowelsAndConsonants(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    for( let index=0; index < s.length; index++) {
        if (vowels.includes(s[index])) {
            console.log (s[index])
        } 
    }

    for( let index=0; index < s.length; index++) {
        if (vowels.includes(s[index]) === false) {
            console.log (s[index]);
        }
    }
}

vowelsAndConsonants("somestringwithboth")