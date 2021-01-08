//https://www.codewars.com/kata/5b4e474305f04bea11000148

function digits(z) {
    let num = z
        .toString()
        .split("")
        .map(v => v * 1);
    let arr = [];
    for (let i = 0; i < num.length; i++) {
        for (let j = 1 + i; j < num.length; j++) {
            arr.push(num[i] + num[j]);
        }
    }
    return arr;
}