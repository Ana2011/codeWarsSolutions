//https://www.codewars.com/kata/5dd5128f16eced000e4c42ba

function solve(st) {
    let newSt = st.split('')
    let obj = {}
    for(let i = 0; i < newSt.length; i++){
        letter = newSt[i]
        first = newSt.indexOf(letter),
            last = newSt.lastIndexOf(letter)
        value = last - first
        obj[letter] = value
    }
    let arr = Object.keys(obj);
    arr.sort()
    console.log(arr);
    let maxValue = -1;
    let maxLetter;
    for(let i = 0; i < arr.length; i++){
        key = arr[i]
        value = obj[key]
        if(value > maxValue){
            maxValue = value;
            maxLetter = key;
        }
    }
    return maxLetter;
}