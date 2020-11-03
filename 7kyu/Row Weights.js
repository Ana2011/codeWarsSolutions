//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/solutions/javascript

function rowWeights(array){
    let sum = 0;
    let sum2 = 0;
    for(let i = 0; i < array.length; i ++) {
        if(i % 2 === 0) {
            sum += array[i];
        } else {
            sum2 += array[i]
        }
    }
    return [sum, sum2];
}