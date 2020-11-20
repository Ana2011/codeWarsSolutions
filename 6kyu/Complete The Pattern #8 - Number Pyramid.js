//https://www.codewars.com/kata/5575ff8c4d9c98bc96000042/train/javascript

function pattern(n){
    return Array.from({ length: n }, (_, i) => {
        let arr = Array.from({ length: i }, (v, j) => (j + 1) % 10);
        return (
            " ".repeat(n - i - 1) +
            arr.join("") +
            ((i + 1) % 10) +
            arr.reverse().join("") +
            " ".repeat(n - i - 1)
        );
    }).join("\n");
}