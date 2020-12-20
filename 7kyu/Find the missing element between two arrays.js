//https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript

function findMissing(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    for (var i = 0; i < arr1.length; i++) if (arr1[i] != arr2[i]) return arr1[i];
}