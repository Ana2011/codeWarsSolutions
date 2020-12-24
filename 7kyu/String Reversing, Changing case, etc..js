//https://www.codewars.com/kata/58305403aeb69a460b00019a

function reverseAndMirror(s1, s2) {
    const arr = s1
        .split("")
        .map(v => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()));
    const arr1 = s2
        .split("")
        .map(v => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()))
        .reverse()
        .join("");
    const arr2 = arr.join("");
    const arr3 = arr.reverse().join("");
    return arr1 + "@@@" + arr3 + arr2;
}