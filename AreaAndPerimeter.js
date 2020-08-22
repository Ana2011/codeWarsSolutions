//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/solutions/javascript/me/best_practice

const areaOrPerimeter = function (l , w) {
    let s = l  * w;
    let p = (l + w) * 2;
    if(l === w) return s;
    else return p;
}; // Return your answer