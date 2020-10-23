//https://www.codewars.com/kata/55a4f9afeffe4231090000d6/train/javascript

function SafeInteger(n) {
    if( Number.isSafeInteger(n)) {
        return true;
    }
    return false;
}
