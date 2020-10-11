//https://www.codewars.com/kata/5641c3f809bf31f008000042

function twoDecimalPlaces(number) {
    let d = Math.trunc(number * 100) / 100;
    return d
}