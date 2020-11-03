//https://www.codewars.com/kata/5a651865fd56cb55760000e0

var arrayLeaders = numbers => {
    let arr = [];
    for(let i = 0; i < numbers.length; i++){
        let sum = 0;
        for(let j = i + 1; j < numbers.length; j++){
            sum = sum + numbers[j]
        }
        if(numbers[i] > sum){
            arr.push(numbers[i])
        }
    }
    return arr;
}