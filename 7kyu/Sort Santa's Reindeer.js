//https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript

function compare(a, b) {
    a = a.split(' ')[1];
    b = b.split(' ')[1];
    return  a > b ? 1 : -1;
}
function sortReindeer(reindeerNames){
    return reindeerNames.sort(compare);
}