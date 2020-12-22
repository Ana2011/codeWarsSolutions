//https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript

function letterCount(s){
    let obj = {};
    for(letter of s){
        if (letter in obj){
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    }
    return obj;
}