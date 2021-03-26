//https://www.codewars.com/kata/5777fe3f355edbf0a5000d11

const xMarksTheSpot = input => {
    let count = 0;
    let x = 0;
    let y = 0;
    input.map((v, i) => {
        if (v.includes("x")) {
            v.map((x, i) => (x === "x" ? (y = i) : v));
            count++;
            x = i;
        } else return v;
    });
    return count === 0 ? [] : count > 1 ? [] : [x, y];
};