//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript

function squareOrSquareRoot(arr) {
    let numbers = [];
    for( let i = 0; i < arr.length; i++){
        let x = Math.sqrt(arr[i]);
        if(x === Math.floor(x)){
            numbers.push(x);
        } else {
            numbers.push(Math.pow(arr[i],2));
        }
    }
    return numbers;
}