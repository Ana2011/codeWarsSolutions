//https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

function pipeFix(numbers){
    let arr = [];
    let max = Math.max(...numbers);
    for(let i =  numbers[0];i <= max; i++){
        arr.push(i);
    }
    return arr;
}