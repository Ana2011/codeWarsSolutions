//https://www.codewars.com/kata/583989556754d6f4c700018e

function multiples(s1, s2, s3) {
    const arr = [];
    for (let i = 1; i < s3; i++) {
        if (i % s1 === 0 && i % s2 === 0) arr.push(i);
    }
    return arr;
}