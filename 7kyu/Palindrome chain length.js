//https://www.codewars.com/kata/525f039017c7cd0e1a000a26

let palindromeChainLength = function (n) {
    let count = 0;
    let palindrome = parseInt((n + '').split('').reverse().join(''));
    while (palindrome !== n) {
        n = parseInt(n) + parseInt(palindrome);
        palindrome = parseInt((n + '').split('').reverse().join(''));
        ++count;
    }

    return count;
};