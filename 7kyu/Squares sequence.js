//https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

function squares(x, n) {
    let arr = [];
    let i = 1;
    while(i <= n){
        arr.push(x)
        x = x ** 2;
        i++;
    }
    return arr;
}