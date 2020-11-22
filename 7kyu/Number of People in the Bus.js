//https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

const number = busStops =>
    busStops.reduce((rem, [on, off]) => rem + on - off, 0);