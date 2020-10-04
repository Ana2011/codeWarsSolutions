//https://www.codewars.com/kata/56a946cd7bd95ccab2000055

function lowercaseCount(str){
    let myStr = str.replace(/[^a-z]/g, '');
    return myStr.length;
}