//https://www.codewars.com/kata/5b39e91ee7a2c103300018b3

const removeConsecutiveDuplicates = s =>
    s
        .split(" ")
        .map((v, i, arr) => (v === arr[i + 1] ? (v = "") : v))
        .join(` `)
        .replace(/\s+/g, " ")
        .trim();