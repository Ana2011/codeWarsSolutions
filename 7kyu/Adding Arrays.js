//https://www.codewars.com/kata/59778cb1b061e877c50000cc/train/javascript

const arrAdder = arr =>
    arr[0].map((_, i) => arr.map((_, j) => arr[j][i]).join("")).join(" ");