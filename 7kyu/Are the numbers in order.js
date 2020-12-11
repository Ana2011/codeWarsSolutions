//https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

function inAscOrder(arr) {
    let arrSorted = [...arr];
    arrSorted.sort(function (a,b){
        return a - b;
    });
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arrSorted[i]){
            return false;
        }
    }
    return true;

}