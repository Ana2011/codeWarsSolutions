//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

function saleHotdogs(n){
    let result =(n < 5) ? 100 * n : (n >= 5 && n < 10) ?  95 * n : 90 * n;
    return result;
}
