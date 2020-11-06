//https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca

const catchSignChange = arr => {
    let count = 0;
    let a = arr.map((v, i, arr) =>
        (v >= 0 && arr[i + 1] < 0) || (v < 0 && arr[i + 1] >= 0) ? count++ : count
    );

    return count;
};