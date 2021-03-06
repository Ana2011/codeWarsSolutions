//https://www.codewars.com/kata/5f7b1a82be51af00105c82bd/train/javascript

function divBy9(ns){
    let sum = 0;
    for(let digit of ns){
        sum = sum + +digit;
    }
    return sum % 9 === 0;
}