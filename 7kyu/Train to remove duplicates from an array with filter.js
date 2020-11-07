//https://www.codewars.com/kata/58308360aeb69a460b0002b2

function unique(arr) {
    return arr.filter((elm, i) => i === arr.indexOf(elm))

}