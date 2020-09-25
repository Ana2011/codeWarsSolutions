//https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
    let result = [];
    let times = n;
    for(let i = x; times > 0; i+=x){
        result.push(i);
        times--;
    }
    return result;
}