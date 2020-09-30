//https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

function adjacentElementsProduct(array) {
    let a = [];
    for(let i = 0; i < array.length -1; i++) {
        a.push(array[i] * array[i+1])
    }
    return Math.max(...a);
}

