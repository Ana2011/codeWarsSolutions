//https://www.codewars.com/kata/57ea1d9c491a15f43f000219/train/javascript

function showMyPassword(birthdays) {
    birthdays = birthdays.sort((a, b) => new Date(b) - new Date(a));
    return (
        birthdays[1].slice(2, 4) +
        birthdays[0].slice(2, 4) +
        birthdays[3].split("-").map(e => (e.length < 2 ? "0" + e : e))[1] +
        birthdays[2].split("-").map(e => (e.length < 2 ? "0" + e : e))[2]
    );
}