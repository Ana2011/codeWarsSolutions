//https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
    let square = Math.sqrt(sq);
    let s = 0;
    if(!(square % 1)){
        s = square +1;
        return (Math.pow(s,2));
    } else {
        return -1;
    }
}