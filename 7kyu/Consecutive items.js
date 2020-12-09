//https://www.codewars.com/kata/5f6d533e1475f30001e47514/train/javascript

function consecutive(arr, a, b) {
    let aIdx = arr.indexOf(a)
    let bIdex = arr.indexOf(b)
    let diff = aIdx - bIdex;
    console.log(diff);
    if(Math.abs(diff) === 1){
        return true;
    }
    return false;
}