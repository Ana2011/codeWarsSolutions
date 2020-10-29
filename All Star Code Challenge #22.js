//https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

function toTime(seconds) {
    let h = 0;
    while (seconds >= 3600) {
        h += 1;
        seconds -= 3600;
    }
    let sec = Math.trunc(seconds / 60);
    return `${h} hour(s) and ${sec} minute(s)`;

}