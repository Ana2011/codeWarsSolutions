//https://www.codewars.com/kata/57fe90ae08d102a2ba0011e6

function pigLatin(phrase) {
    return phrase
        .toLowerCase()
        .split(" ")
        .map(v => v.slice(1) + v.slice(0, 1) + "ay")
        .join(` `);
}