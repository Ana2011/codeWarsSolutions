//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

var gimme = function (inputArray) {

    let min = Math.min(...inputArray);
    let max = Math.max(...inputArray);

    for(let el of inputArray) {
        if(el !== min && el !== max) {
            return inputArray.indexOf(el);
        }
    }
};