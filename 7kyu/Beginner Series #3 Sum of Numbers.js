//https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum( a,b ){
    let begin;
    let end;
    if (a < b) {
        begin = a;
        end = b;
    } else {
        begin = b;
        end = a;
    }
    let sum = 0;
    for (let i = begin; i <= end; i++) {
        sum += i;
    }
    return sum;
}