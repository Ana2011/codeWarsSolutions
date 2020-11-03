//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(array) {
    let arr = array;
    let sum = 0;
    for (let i =0; i< arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum/ arr.length;
}