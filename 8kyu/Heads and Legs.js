//https://www.codewars.com/kata/574c5075d27783851800169e

const isNatural = animal => animal >= 0 && Number.isInteger(animal)
const animals = (heads, legs) => {
    const cows = legs / 2 - heads
    const chickens = heads - cows

    return isNatural(chickens) && isNatural(cows)
        ? [chickens, cows]
        : 'No solutions'
}