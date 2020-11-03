function sumOfTwoLargest(a, b, c) {
    let arr = [a, b, c];
    arr.sort(function(a, b){return a - b});
    let sum = arr[arr.length - 1] + arr[arr.length - 2];
    return sum;
}

console.log(sumOfTwoLargest(-1, -2, -3));
