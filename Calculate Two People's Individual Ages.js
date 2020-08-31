//https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript

function getAges(sum,difference){
    if(sum < 0 || difference < 0){
        return null;
    }
    let age = (sum  - difference) / 2;
    let age1 = (sum - age);
    if(age < 0 || age1 < 0){
        return null;
    }
    let arr = [age, age1]
    arr.reverse();
    return arr
}