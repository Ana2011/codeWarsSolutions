//https://www.codewars.com/kata/5a145ab08ba9148dd6000094/train/javascript

function doubles(s){
    let newString = [];
    for(let i = 0; i < s.length; i++) {
        if(newString[newString.length - 1] === s[i]){
            newString.pop()
        }else newString.push(s[i])
    }
    return newString.join('');
}