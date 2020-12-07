//https://www.codewars.com/kata/5436f26c4e3d6c40e5000282

function sumOfN(n) {
    let a = [];
    let sum = 0;
    if(n > 0){
        for(let i = 0; i <= n; i++){
            sum = sum + i;
            a.push(sum)
        }
    } else {
        for(let i = 0; i >= n; i--){
            sum = sum + i;
            a.push(sum)
        }
    }