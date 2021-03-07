//https://www.codewars.com/kata/5f5daf1a209a64001183af9b

function makeChocolates(small, big, goal) {
    for(let s = 0; s <= small; s++){
        for(let b = 0; b <= big; b++){
            if(s * 2 + b * 5 === goal) return s;
        }
    }
    return -1;
}