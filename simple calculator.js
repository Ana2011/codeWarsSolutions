//https://www.codewars.com/kata/5810085c533d69f4980001cf

function calculator(a,b,sign){
    if(isNaN(a) || isNaN(b)){
        return 'unknown value';
    }
    switch(sign) {
        case '+': return a + b ;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return (a/ b);
        case '%': return  a % b;
        default: return 'unknown value';
    }
}