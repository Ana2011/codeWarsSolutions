//https://www.codewars.com/kata/5868812b15f0057e05000001

function tailSwap(arr) {
    let head = [];
    let tail = [];
    arr.map(v =>
        v.split(":").map((v, i, arr) => (i % 2 == 0 ? head.push(v) : tail.push(v)))
    );
    tail = tail.reverse();
    head = head.map((v, i) => v + ":" + tail[i]);
    return head;
}