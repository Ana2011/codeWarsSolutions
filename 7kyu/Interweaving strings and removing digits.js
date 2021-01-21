//https://www.codewars.com/kata/588a7d45019c42be61000009

function interweave(s1, s2) {
    s1 = s1.split("");
    s2 = s2.split("");
    let arr = [];
    let str = (s1.join(``) + s2.join(``)).slice();
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            arr.push(s1.shift());
        } else {
            arr.push(s2.shift());
        }
    }
    return arr.join("").replace(/[0-9]/gi, "");
}