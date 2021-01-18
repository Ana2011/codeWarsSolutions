//https://www.codewars.com/kata/57d001b405c186ccb6000304

function iTri(s) {
    var triLength = 140.60;
    var result = {};
    var str = ' to go!';
    var lengthLeft = (triLength - s).toFixed(2);

    switch(true) {
        case s === 0:
            return 'Starting Line... Good Luck!';
        case s <= 2.4:
            result.Swim = lengthLeft + str;
            break;
        case s <= 114.4:
            result.Bike = lengthLeft + str;
            break;
        case s < 130.60:
            result.Run = lengthLeft + str;
            break;
        case s < 140.60:
            result.Run = 'Nearly there!';
            break;
        default:
            return 'You\'re done! Stop running!';
    }

    return result;
}