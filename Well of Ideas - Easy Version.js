//https://www.codewars.com/kata/57f222ce69e09c3630000212

function well(x){
    let good = x.filter(el => el === 'good').length;
    return good === 0 ? 'Fail!' : (good > 2) ? 'I smell a series!' : 'Publish!';
}
//   let count = 0;
//   for(let i = 0; i < x.length; i++){
//     if(x[i] === 'good')
//       count ++;
//   }
//   if(count === 0) {
//     return 'Fail!';
//   } else if( count > 0 && count <=2){
//     return 'Publish!';
//   } else {
//     return 'I smell a series!'
//   }
// }