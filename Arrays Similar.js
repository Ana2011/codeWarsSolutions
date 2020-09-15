//https://www.codewars.com/kata/51e704f2d8dbace389000279/solutions/javascript

function arraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    arr1.sort()
    arr2.sort()
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}