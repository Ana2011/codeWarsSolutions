//https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript

var filterLucky=x=>{
    return x.filter(el => String(el).split('').includes('7'));
}