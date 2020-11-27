//https://www.codewars.com/kata/5ce6728c939bf80029988b57

function solve(s) {
    let sorted = s
        .split(``)
        .sort()
        .map(v => v.charCodeAt());
    return (
        sorted.map((v, i, arr) => v + 1 === arr[i + 1]).filter(v => v === false)
            .length < 2
    );
}
