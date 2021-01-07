//https://www.codewars.com/kata/583f158ea20cfcbeb400000a

function arithmetic(a, b, operator){
    let  ops = {"add": a+b, "subtract": a-b, "multiply":a*b, "divide":a/b}
    return ops[operator]
}