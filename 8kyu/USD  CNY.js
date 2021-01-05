//https://www.codewars.com/kata/5977618080ef220766000022/solutions/javascript

function usdcny(usd) {
    let chy = 6.75
    return `${(usd * chy).toFixed(2)} Chinese Yuan`;
}