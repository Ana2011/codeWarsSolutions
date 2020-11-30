//https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0/train/javascript

function lifePathNumber(dateOfBirth) {
    return [...dateOfBirth.split("-")]
        .map(v => v.split("").reduce((a, b) => a + b * 1, 0))
        .map(v =>
            v
                .toString()
                .split("")
                .reduce((a, b) => a + b * 1, 0)
        )
        .reduce((a, b) => a + b * 1, 0)
        .toString()
        .split("")
        .reduce((a, b) => a + b * 1, 0)
        .toString()
        .split("")
        .reduce((a, b) => a + b * 1, 0);
}