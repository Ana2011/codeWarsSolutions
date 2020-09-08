//https://www.codewars.com/kata/57be674b93687de78c0001d9/train/javascript

function largestPower(n){
    let i = 0;
    while (3 ** i < n)
        i++;
    return i-1;
}