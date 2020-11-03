//https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/train/javascript

function getMinMax(arr){
    let max = Math.max(...arr);

    let min = Math.min(...arr);

    if(arr.length === 0) {

        return [];

    }

    return [min,max]
};