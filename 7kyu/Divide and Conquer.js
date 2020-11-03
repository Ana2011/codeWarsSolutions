//https://www.codewars.com/kata/57eaec5608fed543d6000021/solutions/javascript


function divCon(x){
    let sumString = 0;
    let sumNum = 0;
    for(let i = 0; i < x.length; i++){
        if(typeof x[i] === 'string'){
            sumString = sumString + +x[i];
        } else {
            sumNum += x[i];
        }
    }
    return sumNum - sumString;
}