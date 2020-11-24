//https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02

function sumOrProduct(array, n) {
    array = array.sort((a, b) => a - b);
    let sum = array
        .reverse()
        .slice(0, n)
        .reduce((a, b) => a + b, 0);
    let product = array
        .reverse()
        .slice(0, n)
        .reduce((a, b) => a * b, 1);
    return sum > product ? "sum" : sum < product ? "product" : "same";
}