//https://www.codewars.com/kata/596776fbb4f24d0d82000141

function f(x, cc) {
    let arr = Object.values(cc);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x && arr[i + 1] === 0) return 0;
        if (arr[i] === x) return arr[i + 1] || arr[0];
    }
}