//https://www.codewars.com/kata/5676f07029da352ba2000065

function isPrime(num){
    if(num <= 1){
        return false;
    }
    for (let i = 2; i <= Math.round(num ** 0.5); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
var largest = (n) => {
    if(n <= 0 || typeof(n) !== 'number'){
        return false;
    }
    let number = 10 ** n - 1;
    while(!isPrime(number)){
        number--;
    }
    return number;
}