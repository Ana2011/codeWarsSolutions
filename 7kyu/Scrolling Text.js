//https://www.codewars.com/kata/5a995c2aba1bb57f660001fd

function scrollingText(text) {
    text = text.toUpperCase();

    return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}