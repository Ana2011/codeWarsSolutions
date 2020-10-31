//https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript

function mirror(data) {
    const arr = [...data]
    arr.sort((a,b) => a -b)

    const reverseArr = [...data]
    reverseArr.sort((a,b) => b - a)
    reverseArr.shift()
    return [...arr, ...reverseArr]
}