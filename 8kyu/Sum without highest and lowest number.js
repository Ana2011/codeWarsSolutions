//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
    if(array == null || array.length ==1 || array.length == 0) {
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum  - Math.min(...array) - Math.max(...array);
}

