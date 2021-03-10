//https://www.codewars.com/kata/5a9078e24a6b340b340000b8

function solve(n){
    let d = n
    while (true){
        if (isPrime(n--)) return n+1
        if (isPrime(d++)) return d-1
    }
}

function isPrime(n) {
    let rt = Math.sqrt(n);
    for(let i = 2; i <= rt; i++) {
        if(n % i === 0) return false;
    }
    return n !== 1;
}