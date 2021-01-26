//https://www.codewars.com/kata/59619e4609868dd923000041

function totalBill(str) {
    str = str.replace(/\s/g, "");
    return str
        ? (str.match(/r/g).length - Math.floor(str.match(/r/g).length / 5)) * 2
        : 0;
}