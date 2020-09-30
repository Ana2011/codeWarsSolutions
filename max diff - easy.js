//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

function maxDiff(list) {
    if(list.length <= 1){
        return 0;
    }
    let diff = 0;
    let min = Math.min(...list);
    let max = Math.max(...list);

    diff = max - min;
    return diff;
}