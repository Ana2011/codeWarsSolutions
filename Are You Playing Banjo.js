//https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
    let arr  = [name];
    if(arr[0][0]=== 'R'|| arr[0][0]==='r'){
        return `${name} plays banjo`;
    } else {
        return `${name} does not play banjo`;
    }
}