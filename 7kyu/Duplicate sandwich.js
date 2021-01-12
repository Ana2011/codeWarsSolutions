//https://www.codewars.com/kata/5f8a15c06dbd530016be0c19

function duplicateSandwich(a) {
    for (let i = 0; i < a.length; i++){
        const firstIndex = a.indexOf(a[i])
        const lastIndex = a.lastIndexOf(a[i])
        if (firstIndex === lastIndex) continue
        else return a.slice(firstIndex+1,lastIndex)
    }
}