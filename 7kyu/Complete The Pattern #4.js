//https://www.codewars.com/kata/55736129f78b30311300010f

function pattern(n){
    let output="";
    for(let i = 1; i <= n; i++){
        for(let j = i; j <= n; j++){
            output += j;
        }
        output += '\n';
    }
    return output.slice(0,-1);
}