//https://www.codewars.com/kata/5dd259444228280032b1ed2a/train/javascript

function solve(s,g){
    let secDig = s - g;
    if(secDig % g===0) {
        return [g, secDig];
    } else {
        return -1;
    }

}
