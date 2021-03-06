//https://www.codewars.com/kata/5b097da6c3323ac067000036/solutions/javascript

function solve(a, b) {
    let [x, y] = [0,0];
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) x++;
        else if (a[i] < b[i]) y++;
    }
    if (x > y) return `${x}, ${y}: Alice made "Kurt" proud!`;
    else if (x < y) return `${x}, ${y}: Bob made "Jeff" proud!`;
    else return `${x}, ${y}: that looks like a "draw"! Rock on!`;
}