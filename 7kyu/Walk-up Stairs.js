//https://www.codewars.com/kata/566c3f5b9de85fdd0e000026/train/javascript

function stairs(n){
    let s = '';
    for(let i = 1; i <= n; i++){
        s += ' '.repeat(n * 4 - i * 4);
        for(let j = 1; j <= i; j++) {
            s = s + (j % 10) + ' ';
        }
        for(let j = i; j >= 1; j--){
            s = s + (j  % 10) + ' ';
        }
        s = s.slice(0, -1);
        s += '\n';
    }
    return s.slice(0, -1);
}
