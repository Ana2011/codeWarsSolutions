//https://www.codewars.com/kata/56786a687e9a88d1cf00005d/train/javascript

function validateWord(s){
    let counts = {};
    for (let c of s.toLowerCase()) {
        if (counts[c] === undefined) {
            counts[c] = 0;
        }
        counts[c]++;
    }
    return (
        Math.max(...Object.values(counts)) === Math.min(...Object.values(counts))
    );
}