//https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript

function crap(x, bags, cap){
    let crap = 0;
    let dog = 0;
    x.map(v =>
        v.map(v => (v === "@" ? (crap += 1) : v === "D" ? (dog += 1) : v))
    );
    if (dog > 0) return "Dog!!";
    return crap > bags * cap ? "Cr@p" : "Clean";
}