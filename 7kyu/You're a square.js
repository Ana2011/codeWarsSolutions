//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

function isSquare(n){
    let square = Math.sqrt(n);
    if(n < 0) {
        return false;
    } else if(!(square % 1)){
        return true;
    } else {
        return false;
    }
}