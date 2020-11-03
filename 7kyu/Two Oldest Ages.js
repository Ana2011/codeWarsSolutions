//https://www.codewars.com/kata/511f11d355fe575d2c000001/solutions/javascript/me/best_practice

function twoOldestAges(ages){
    const filteredAges = ages.sort(function(a,b){
        return b - a;
    })
    return [filteredAges[1], filteredAges[0]];
}