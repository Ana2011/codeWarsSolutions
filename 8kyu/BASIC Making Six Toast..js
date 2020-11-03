//https://www.codewars.com/kata/5834fec22fb0ba7d080000e8

function sixToast(num) {
    if(num === 6){
        return 0;
    } else if(num < 6) {
        return 6 - num;
    } else if(num > 6) {
        return num - 6;
    }
}
