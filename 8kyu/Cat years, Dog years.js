//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript

function humanYearsCatYearsDogYears(humanYears) {
    let firstYearsCat = 15;
    let firstYearsDog = 15;
    if(humanYears === 1){
        return [humanYears, firstYearsCat, firstYearsDog];
    } else if(humanYears === 2){
        return [humanYears, firstYearsCat + 9, firstYearsDog + 9];
    } else if(humanYears >= 3){
        return [humanYears, firstYearsCat + 9 + 4 * (humanYears - 2), firstYearsDog + 9 + 5 *(humanYears - 2)];
    }
}