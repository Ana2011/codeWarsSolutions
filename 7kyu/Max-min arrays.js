//https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr){
    arr = arr.sort((a, b) => b - a);
    const length = arr.slice().length;
    const arr1 = [];
    for (let i = 0; i < length; i++) {
        arr1.push(arr.shift());
        arr1.push(arr.pop());
    }
    return arr1.filter(v => v != undefined);
};