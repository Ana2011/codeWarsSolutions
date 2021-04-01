//https://www.codewars.com/kata/5856c5f7f37aeceaa100008e/solutions/javascript

function baublesOnTree(baubles, branches) {
    let arr = Array(branches).fill(0);
    if (arr.length === 0)
        return "Grandma, we will have to buy a Christmas tree first!";
    for (let i = 0; ; i++) {
        if (arr.reduce((a, b) => a + b, 0) === baubles) {
            break;
        }
        arr[i % arr.length] += 1;
    }
    return arr;
}